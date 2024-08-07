import * as React from 'react'

import { Button } from '@/components/ui/button'
import { PromptForm } from '@/components/prompt-form'
import { ButtonScrollToBottom } from '@/components/button-scroll-to-bottom'
import { IconShare } from '@/components/ui/icons'
import { FooterText } from '@/components/footer'
import { nanoid } from 'nanoid'
import { useContext, useState } from 'react'
import { ChatMemoryContext } from '@/lib/providers/chat-memory'
import { ChatLoadingContext } from '@/lib/providers/chat-loading'

export interface ChatPanelProps {
  id?: string
  title?: string
  input: string
  setInput: (value: string) => void
  isAtBottom: boolean
  scrollToBottom: () => void
}

export function ChatPanel({
  id,
  title,
  input,
  setInput,
  isAtBottom,
  scrollToBottom
}: ChatPanelProps) {
  const [messages, setMessages] = useContext(ChatMemoryContext)
  const {
    loading: [isLoading, setIsLoading],
    error: [isError, setIsError]
  } = useContext(ChatLoadingContext)
  const [shareDialogOpen, setShareDialogOpen] = React.useState(false)

  const exampleMessages = [
    {
      heading: 'What breed of cat is',
      subheading: 'the most friendly?',
      message: `What breed of cat is the most friendly?`
    },
    {
      heading: 'How many cats',
      subheading: 'are available for adoption right now?',
      message: 'How many cats are available for adoption right now?'
    },
    {
      heading: 'How often should I',
      subheading: 'bathe my cat?',
      message: `How often should I bathe my cat?`
    },
    {
      heading: 'Which of your cats',
      subheading: `is best for a reclusive author?`,
      message: `Which of your cats is best for a reclusive author?`
    }
  ]

  return (
    <div className="fixed inset-x-0 bottom-0 w-full bg-gradient-to-b from-muted/30 from-0% to-muted/30 to-50% duration-300 ease-in-out animate-in dark:from-background/10 dark:from-10% dark:to-background/80 peer-[[data-state=open]]:group-[]:lg:pl-[250px] peer-[[data-state=open]]:group-[]:xl:pl-[300px]">
      <ButtonScrollToBottom
        isAtBottom={isAtBottom}
        scrollToBottom={scrollToBottom}
      />

      <div className="mx-auto sm:max-w-2xl sm:px-4">
        <div className="mb-4 grid grid-cols-2 gap-2 px-4 sm:px-0">
          {messages.length === 0 &&
            exampleMessages.map((example, index) => (
              <div
                key={example.heading}
                className={`cursor-pointer rounded-lg border bg-white p-4 hover:bg-zinc-50 dark:bg-zinc-950 dark:hover:bg-zinc-900 ${
                  index > 1 && 'hidden md:block'
                }`}
                onClick={async () => {
                  setMessages([
                    ...messages,
                    {
                      id: nanoid(),
                      type: 'user',
                      content: example.message
                    }
                  ])

                  setIsLoading(true)
                  setIsError(false)

                  try {
                    const res = await fetch(
                      `${process.env.NEXT_PUBLIC_BOT_ENDPOINT}/makethejump/bot?prompt=${encodeURIComponent(example.message)}`
                    )
                    if (!res.ok) {
                      throw new Error('Network response was not ok')
                    }
                    const { response } = await res.json()
                    // setResponse(response)
                    setMessages(prevMessages => [
                      ...prevMessages,
                      {
                        id: nanoid(),
                        type: 'bot',
                        content: response ?? ''
                      }
                    ])
                  } catch (error) {
                    setIsError(true)
                  } finally {
                    setIsLoading(false)
                  }
                }}
              >
                <div className="text-sm font-semibold">{example.heading}</div>
                <div className="text-sm text-zinc-600">
                  {example.subheading}
                </div>
              </div>
            ))}
        </div>

        {messages?.length >= 2 ? (
          <div className="flex h-12 items-center justify-center">
            <div className="flex space-x-2">
              {id && title ? (
                <>
                  <Button
                    variant="outline"
                    onClick={() => setShareDialogOpen(true)}
                  >
                    <IconShare className="mr-2" />
                    Share
                  </Button>
                </>
              ) : null}
            </div>
          </div>
        ) : null}

        <div className="space-y-4 border-t bg-background px-4 py-2 shadow-lg sm:rounded-t-xl sm:border md:py-4">
          <PromptForm input={input} setInput={setInput} />
          <FooterText className="hidden sm:block" />
        </div>
      </div>
    </div>
  )
}

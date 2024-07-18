import { Separator } from '@/components/ui/separator'
import { Session } from '@/lib/types'
import Link from 'next/link'
import { ExclamationTriangleIcon } from '@radix-ui/react-icons'
import { ChatMessage } from '@/lib/providers/chat-memory'
import { BotMessage, UserMessage } from './stocks/message'
import { useContext } from 'react'
import { ChatLoadingContext } from '@/lib/providers/chat-loading'

export interface ChatList {
  messages: ChatMessage[]
  session?: Session
  isShared: boolean
}

export function ChatList({ messages, session, isShared }: ChatList) {
  const {
    loading: [isLoading],
    error: [isError]
  } = useContext(ChatLoadingContext)

  if (!messages.length) {
    return null
  }

  return (
    <div className="relative mx-auto max-w-2xl px-4">
      {!isShared && !session ? (
        <>
          <div className="group relative mb-4 flex items-start md:-ml-12">
            <div className="bg-background flex size-[25px] shrink-0 select-none items-center justify-center rounded-md border shadow-sm">
              <ExclamationTriangleIcon />
            </div>
            <div className="ml-4 flex-1 space-y-2 overflow-hidden px-1">
              <p className="text-muted-foreground leading-normal">
                Please{' '}
                <Link href="/login" className="underline">
                  log in
                </Link>{' '}
                or{' '}
                <Link href="/signup" className="underline">
                  sign up
                </Link>{' '}
                to save and revisit your chat history!
              </p>
            </div>
          </div>
          <Separator className="my-4" />
        </>
      ) : null}

      {messages.map((message, index) => (
        <div key={message.id}>
          {message.type === 'user' ? (
            <UserMessage>{message.content}</UserMessage>
          ) : (
            <BotMessage content={message.content} />
          )}
          {index < messages.length - 1 && <Separator className="my-4" />}
        </div>
      ))}
      {isLoading && (
        <div key="loading">
          <Separator className="my-4" />
          <BotMessage content={'Bot is typing...'} />
        </div>
      )}
      {isError && (
        <div key="loading">
          <Separator className="my-4" />
          <span className="text-red-600">
            <BotMessage
              content={
                'Bot ran into an error. Check Developer Console for details.'
              }
            />
          </span>
        </div>
      )}
    </div>
  )
}

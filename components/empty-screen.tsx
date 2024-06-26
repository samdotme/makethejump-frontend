import { UseChatHelpers } from 'ai/react'

import { Button } from '@/components/ui/button'
import { ExternalLink } from '@/components/external-link'
import { IconArrowRight } from '@/components/ui/icons'

export function EmptyScreen() {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="flex flex-col gap-2 rounded-lg border bg-background p-8">
        <h1 className="text-lg font-semibold">The Cat Cafe</h1>
        <p className="leading-normal text-muted-foreground">
          Hi, I'm an intelligent chatbot built by [Your name here].{' '}
        </p>
        <p className="leading-normal text-muted-foreground">I can currently</p>
        <ul className="list-disc list-inside text-muted-foreground">
          <li>Answer general questions about cats</li>
          <li>Provide cat facts</li>
          <li>Chat with you about cats available for adoption</li>
        </ul>
      </div>
    </div>
  )
}

import { UseChatHelpers } from 'ai/react'

import { Button } from '@/components/ui/button'
import { ExternalLink } from '@/components/external-link'
import { IconArrowRight } from '@/components/ui/icons'

export function EmptyScreen() {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="flex flex-col gap-2 rounded-lg border bg-background p-8">
        <h1 className="text-2xl font-semibold">Hi there!</h1>
        <p className="leading-normal text-muted-foreground">
          I'm an intelligent chatbot built by{' '}
          {process.env.NEXT_PUBLIC_AUTHOR_NAME}.{' '}
          I pretend to be a customer service agent for a fictional cat café.
        </p>

        <h2 className="mt-6 text-md font-semibold">I can currently</h2>
        <ul className="list-disc list-inside text-muted-foreground">
          <li>Answer general questions about cats</li>
          <li>Tell you about cats available for adoption</li>
        </ul>
      </div>
    </div>
  )
}

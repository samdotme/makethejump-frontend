import React from 'react'

import { cn } from '@/lib/utils'
import { ExternalLink } from '@/components/external-link'

export function FooterText({ className, ...props }: React.ComponentProps<'p'>) {
  return (
    <p
      className={cn(
        'px-2 text-center text-xs leading-normal text-muted-foreground',
        className
      )}
      {...props}
    >
      Learn to build your own AI chatbot at{' '}
      <ExternalLink href="https://makethejump.ai/developer">
        makethejump.ai/developer
      </ExternalLink>
      .
    </p>
  )
}

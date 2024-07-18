'use client'

import * as React from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { ThemeProviderProps } from 'next-themes/dist/types'
import { SidebarProvider } from '@/lib/hooks/use-sidebar'
import { TooltipProvider } from '@/components/ui/tooltip'
import ChatMemoryProvider from '@/lib/providers/chat-memory'
import ChatLoadingProvider from '@/lib/providers/chat-loading'

export function Providers({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
      <SidebarProvider>
        <TooltipProvider>
          <ChatMemoryProvider>
            <ChatLoadingProvider>{children}</ChatLoadingProvider>
          </ChatMemoryProvider>
        </TooltipProvider>
      </SidebarProvider>
    </NextThemesProvider>
  )
}

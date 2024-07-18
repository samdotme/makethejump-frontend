import React, { createContext, use, useEffect, useState } from 'react'

export interface ChatMessage {
  id: string
  content: string
  type: 'user' | 'bot'
}

type ChatLoadingContextType = [
  boolean,
  React.Dispatch<React.SetStateAction<boolean>>
]

// Create the context with an initial default value of type ChatMemoryContextType
export const ChatLoadingContext = createContext<ChatLoadingContextType>([
  false,
  () => null
])

const ChatLoadingProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  return (
    <ChatLoadingContext.Provider value={[isLoading, setIsLoading]}>
      {children}
    </ChatLoadingContext.Provider>
  )
}

export default ChatLoadingProvider

import React, { createContext, use, useEffect, useState } from 'react'

export interface ChatMessage {
  id: string
  content: string
  type: 'user' | 'bot'
}

type ChatLoadingContextType = {
  loading: [boolean, React.Dispatch<React.SetStateAction<boolean>>]
  error: [boolean, React.Dispatch<React.SetStateAction<boolean>>]
}

// Create the context with an initial default value of type ChatMemoryContextType
export const ChatLoadingContext = createContext<ChatLoadingContextType>({
  loading: [false, () => null],
  error: [false, () => null]
})

const ChatLoadingProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isError, setIsError] = useState<boolean>(false)

  return (
    <ChatLoadingContext.Provider
      value={{
        loading: [isLoading, setIsLoading],
        error: [isError, setIsError]
      }}
    >
      {children}
    </ChatLoadingContext.Provider>
  )
}

export default ChatLoadingProvider

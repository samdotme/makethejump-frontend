import React, { createContext, use, useEffect, useState } from 'react'

export interface ChatMessage {
  id: string
  content: string
  type: 'user' | 'bot'
}

type ChatMemoryContextType = [
  ChatMessage[],
  React.Dispatch<React.SetStateAction<ChatMessage[]>>
]

// Create the context with an initial default value of type ChatMemoryContextType
export const ChatMemoryContext = createContext<ChatMemoryContextType>([
  [],
  () => {}
])

const ChatMemoryProvider = ({ children }: { children: React.ReactNode }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([])

  return (
    <ChatMemoryContext.Provider value={[messages, setMessages]}>
      {children}
    </ChatMemoryContext.Provider>
  )
}

export default ChatMemoryProvider

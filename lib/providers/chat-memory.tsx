import React, { createContext, use, useEffect, useState } from 'react'

export interface ChatMessage {
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

// export const ChatMemoryContext = createContext<
//   ChatMessage[] | React.Dispatch<React.SetStateAction<ChatMessage[]>>
// >([])

const ChatMemoryProvider = ({ children }: { children: React.ReactNode }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([])

  // useEffect(() => {
  //   setMessages([{ content: 'Hello', type: 'bot' }])
  // }, [])

  return (
    <ChatMemoryContext.Provider value={[messages, setMessages]}>
      {children}
    </ChatMemoryContext.Provider>
  )
}

export default ChatMemoryProvider

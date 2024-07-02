import React, { useState, useEffect } from 'react'

interface BotPromptProps {
  prompt: string
}

const getLlmResponse = ({ prompt }: BotPromptProps) => {
  const [response, setResponse] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const res = await fetch(
          `http://localhost:8000/makethejump/bot?prompt=${encodeURIComponent(prompt)}`
        )
        if (!res.ok) {
          throw new Error('Network response was not ok')
        }
        const data = await res.json()
        setResponse(data)
      } catch (error) {
        setError(error as Error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [prompt])

  if (loading) {
    return {
      loading,
      response,
      error
    }
  }

  if (error) {
    return {
      loading,
      response,
      error
    }
  }

  return {
    loading,
    response,
    error
  }
}

export function useLlmResponse() {
  return { getLlmResponse }
}

export default useLlmResponse

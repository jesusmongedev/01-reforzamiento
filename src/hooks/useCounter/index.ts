import { useState } from 'react'

export const useCounter = (initialValue: number = 100) => {
  const [count, setCount] = useState(initialValue)

  const handleSetCount = (value: number) => {
    setCount((prevCount) => prevCount + value)
  }

  return {
    count,
    handleSetCount,
  }
}

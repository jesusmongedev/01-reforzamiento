import { useState } from 'react'

export const Counter = () => {
  const [count, setCount] = useState(0)

  const handleSetCount = (value: number) => {
    setCount((prevCount) => prevCount + value)
  }

  return (
    <>
      <div className="mb-2">
        <span className="is-size-5 has-text-weight-semibold">Counter: </span>
        <code className="is-size-5 has-text-weight-semibold">{count}</code>
      </div>
      <button
        className="button is-primary mr-3"
        onClick={() => handleSetCount(1)}
      >
        Increment
      </button>
      <button className="button is-primary" onClick={() => handleSetCount(-1)}>
        decrement
      </button>
    </>
  )
}

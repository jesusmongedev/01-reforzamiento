import { useCounter } from '../hooks/useCounter'

export const HookCounter = () => {
  const { count, handleSetCount } = useCounter()

  return (
    <>
      <div className="mb-2">
        <span className="is-size-5 has-text-weight-semibold">
          Counter using Custom Hook:{' '}
        </span>
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

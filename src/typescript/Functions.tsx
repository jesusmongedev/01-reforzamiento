export const Functions = () => {
  const sum = (a: number, b: number) => a + b

  return (
    <>
      <h3 className="is-size-5 has-text-weight-semibold">Funciones:</h3>
      <span>El resutdo de sumar 12 + 6 = {sum(12, 6)}</span>
    </>
  )
}

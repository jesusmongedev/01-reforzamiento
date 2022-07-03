interface Person {
  fullName: string
  age: number
  address: Address
}

interface Address {
  country: string
  postalCode: number
}

export const LiteralObjects = () => {
  const person: Person = {
    fullName: 'Jesus',
    age: 25,
    address: {
      country: 'Ecuador',
      postalCode: 35843,
    },
  }

  return (
    <>
      <h3 className="is-size-5 has-text-weight-semibold">Objetos Literales:</h3>
      <code>
        <pre>{JSON.stringify(person, null, 2)}</pre>
      </code>
    </>
  )
}

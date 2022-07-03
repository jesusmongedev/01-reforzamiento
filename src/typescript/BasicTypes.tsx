export const BasicTypes = () => {
  const name: string | number = 'Jesus Monge'
  const age: number = 25
  const isActive: boolean = false
  const techStackList: string[] = [
    'git',
    'github',
    'vscode',
    'html',
    'css',
    'js',
  ]

  const listItems = techStackList.map((stack) => (
    <li key={stack}>➖ {stack.toUpperCase()}</li>
  ))

  techStackList.push('nodejs')

  return (
    <>
      <h2 className="is-size-5 has-text-weight-semibold">Tipos Básicos:</h2>
      <p>
        {name} - {age} years old, {isActive ? 'active' : 'disconnected'}
      </p>
      <h3 className="is-size-5 has-text-weight-semibold">Tech Stack:</h3>
      <ul>{listItems}</ul>
    </>
  )
}

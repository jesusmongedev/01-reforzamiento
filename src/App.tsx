// import { BasicTypes } from './typescript/BasicTypes'
// import { LiteralObjects } from './typescript/LiteralObjects'
// import { Functions } from './interfaces/Functions'
// import { Counter } from './components/Counter'
// import { HookCounter } from './components/HookCounter'
import { Layout } from './components/Layout'
import { Login } from './components/Login/Login'

const App = () => {
  return (
    <Layout>
      <h1 className="has-text-centered is-size-4 has-text-weight-bold">
        Introducción a React Native
      </h1>
      <hr />
      {/* <BasicTypes /> */}
      {/* <LiteralObjects /> */}
      {/* <Functions /> */}
      {/* <Counter /> */}
      {/* <HookCounter /> */}
      <Login />
    </Layout>
  )
}
export default App

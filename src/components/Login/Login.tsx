import { useReducer } from 'react'
import { AuthAction, AuthState } from '../../interfaces/Login'
import { login, logout } from './reducer/actions'
import { LOGIN, LOGOUT } from './reducer/selectors'

const initialState: AuthState = {
  isValidated: true,
  token: null,
  username: '',
  name: '',
}

const AuthReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case LOGOUT:
      return {
        isValidated: false,
        token: null,
        username: '',
        name: '',
      }

    case LOGIN:
      const { name, username } = action.payload
      return {
        isValidated: false,
        token: 'ecu123',
        username,
        name,
      }

    default:
      return state
  }
}

export const Login = () => {
  const [{ token, username, name }, dispatch] = useReducer(
    AuthReducer,
    initialState
  )

  const handleLogin = () => {
    setTimeout(() => {
      dispatch(login({ username: 'jmongedev', name: 'Jesus Monge' }))
    }, 1500)
  }

  const handleLogout = () => {
    setTimeout(() => {
      dispatch(logout())
    }, 1500)
  }

  return (
    <>
      <h3 className="is-size-5 has-text-weight-semibold mb-4">Login</h3>
      {!token && (
        <div className="notification is-danger">Not authorized...</div>
      )}
      {token && (
        <>
          <div className="notification is-success">
            Authorized as: @{username}
          </div>
          <p className="mb-4"> Welcome back! {name}</p>
        </>
      )}
      {token && (
        <button className="button" onClick={handleLogout}>
          Logout
        </button>
      )}
      {!token && (
        <button className="button is-link mr-4" onClick={handleLogin}>
          Login
        </button>
      )}
    </>
  )
}

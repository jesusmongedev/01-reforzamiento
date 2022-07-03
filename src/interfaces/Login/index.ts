export interface AuthState {
  isValidated: boolean
  token: null | string
  username: string
  name: string
}

export type LoginPayload = {
  username: string
  name: string
}

export type AuthAction =
  | { type: 'LOGOUT' }
  | { type: 'LOGIN'; payload: LoginPayload }

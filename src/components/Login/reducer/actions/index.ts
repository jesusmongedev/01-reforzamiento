import { AuthAction, LoginPayload } from '../../../../interfaces/Login'
import { LOGIN, LOGOUT } from '../selectors'

export const logout = (): AuthAction => ({ type: LOGOUT })
export const login = (payload: LoginPayload): AuthAction => ({
  type: LOGIN,
  payload,
})

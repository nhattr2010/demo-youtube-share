import { LOGIN, LOGIN_FAILURE, LOGIN_START, LOGIN_SUCCESS, LOGOUT } from "./user.const";
import { TLogin } from "./user.type";
import { TUser } from "../../types/user";

export const login = ({email, password}: TLogin) => ({
  type: LOGIN,
  payload: {
    email,
    password
  }
})

export const loginStart = () => ({
  type: LOGIN_START
})
export const loginSuccess = (user: TUser) => ({
  type: LOGIN_SUCCESS,
  payload: user
})

export const loginFailure = () => ({
  type: LOGIN_FAILURE
})

export const logout = () => ({
  type: LOGOUT,
})

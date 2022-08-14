import {
  GET_INTERACTION, GET_INTERACTION_FAILURE,
  GET_INTERACTION_SUCCESS, INTERACT_SUCCESS,
  LOGIN,
  LOGIN_FAILURE,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGOUT
} from "./user.const";
import { TInteractSuccessPayload, TLogin } from "./user.type";
import { TUser, TUserInteraction } from "../../types/user";
import { TMovie } from "../../types/movie";

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

export const getInteractions = (userId: string, movies: string[]) => ({
  type: GET_INTERACTION,
  payload: {
    userId,
    movies
  }
})

export const getInteractionsSuccess = (data: TUserInteraction[]) => ({
  type: GET_INTERACTION_SUCCESS,
  payload: data
})

export const getInteractionsFailure = () => ({
  type: GET_INTERACTION_FAILURE
})

export const interactSuccess = ({interaction, movie}: TInteractSuccessPayload) => ({
  type: INTERACT_SUCCESS,
  payload: {
    interaction,
    movie,
  }
})

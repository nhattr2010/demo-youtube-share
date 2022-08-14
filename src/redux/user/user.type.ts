import { TCommonApiRes } from "../../types/common";
import { TUser, TUserInteraction } from "../../types/user";
import { TMovie } from "../../types/movie";

export type TLogin = {
  email: string;
  password: string
}

export type TGetInteractionPayload = {
  userId: string;
  movies: string[];
}


export type TLoginAction = {
  type: string,
  payload: TLogin
}

export type TGetInteractionsAction = {
  type: string,
  payload: TGetInteractionPayload
}

export type TUserRes = TCommonApiRes & {
  data: TUser;
}

export type TUserInteractionsRes = TCommonApiRes & {
  data: TUserInteraction[];
}

export type TInteractSuccessPayload = {
  interaction: TUserInteraction;
  movie: TMovie;
}

export type TInteractSuccessAction = {
  type: string,
  payload: TInteractSuccessPayload
}


export type TUserInteractRes = TCommonApiRes & {
  data: TInteractSuccessPayload
}

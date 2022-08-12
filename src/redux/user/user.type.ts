export type TLogin = {
  email: string;
  password: string
}


export type TLoginAction = {
  type: string,
  payload: TLogin
}

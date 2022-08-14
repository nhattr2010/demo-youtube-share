import { TUser, TUserInteractionsState } from "../user";

export interface IUserState {
  data?: TUser;
  loggingIn: boolean;
  interactions: TUserInteractionsState;
}

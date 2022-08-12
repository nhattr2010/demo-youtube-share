import { IUserState } from "./userState";
import { EReducerNamespaces } from "../constants/reducerNamespaces";


export interface IApplicationState {
  [EReducerNamespaces.User]: IUserState;
}

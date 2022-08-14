import { IUserState } from "./userState";
import { EReducerNamespaces } from "../../constants/reducerNamespaces";
import { IMovieState } from "./movieState";


export interface IApplicationState {
  [EReducerNamespaces.User]: IUserState;
  [EReducerNamespaces.Movie]: IMovieState;
}

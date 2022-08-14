import { EActionStatus } from "../../constants/actions";

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const GET_INTERACTION = 'GET_INTERACTION';
export const INTERACT = 'INTERACT';
export const LOGIN_START = `${LOGIN}_${EActionStatus.Start}`;
export const LOGIN_SUCCESS = `${LOGIN}_${EActionStatus.Success}`;
export const LOGIN_FAILURE = `${LOGIN}_${EActionStatus.Failure}`;

export const GET_INTERACTION_START = `${GET_INTERACTION}_${EActionStatus.Start}`;
export const GET_INTERACTION_SUCCESS = `${GET_INTERACTION}_${EActionStatus.Success}`;
export const GET_INTERACTION_FAILURE = `${GET_INTERACTION}_${EActionStatus.Failure}`;

export const INTERACT_SUCCESS = `${INTERACT}_${EActionStatus.Success}`;


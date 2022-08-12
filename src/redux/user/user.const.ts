export enum EActionStatus {
  Start = 'START',
  Success = 'SUCCESS',
  Failure = 'FAILURE',
}

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const LOGIN_START = `${LOGIN}_${EActionStatus.Start}`;
export const LOGIN_SUCCESS = `${LOGIN}_${EActionStatus.Success}`;
export const LOGIN_FAILURE = `${LOGIN}_${EActionStatus.Failure}`;

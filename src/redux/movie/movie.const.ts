import { EActionStatus } from "../../constants/actions";

export const GET_LIST = 'GET_LIST';
export const SHARE_MOVIE = 'SHARE_MOVIE';
export const GET_LIST_START = `${GET_LIST}_${EActionStatus.Start}`;
export const GET_LIST_SUCCESS = `${GET_LIST}_${EActionStatus.Success}`;
export const GET_LIST_FAILURE = `${GET_LIST}_${EActionStatus.Failure}`;

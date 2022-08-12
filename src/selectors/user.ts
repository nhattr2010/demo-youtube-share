import { IApplicationState } from "../types/applicationState";

export const selectUser = (state: IApplicationState) => state.user
export const selectUserLoggingIn = (state: IApplicationState) => state.user.loggingIn

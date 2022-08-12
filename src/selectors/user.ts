import { IApplicationState } from "../types/applicationState";
import { createSelector } from "reselect";

export const selectUser = (state: IApplicationState) => state.user
export const selectUserLoggingIn = createSelector(
  selectUser,
  (user) => user.loggingIn
)
export const selectUserData = createSelector(
  selectUser,
  (user) => user.data
)

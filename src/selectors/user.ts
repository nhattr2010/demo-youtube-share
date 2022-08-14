import { IApplicationState } from "../types/redux/applicationState";
import { createSelector } from "reselect";

export const selectUser = (state: IApplicationState) => state.user
export const selectUserLoggingIn = createSelector(
  selectUser,
  (user) => user.loggingIn
)
export const selectUserData = createSelector(
  selectUser,
  (user) => user.data ?? null
)

export const selectUserInteractions = createSelector(
  selectUser,
  (user) => user.interactions ?? null
)

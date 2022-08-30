import userReducer, { userInitialState } from "../user.reducer";
import { getInteractionSuccess, loginFailure, loginStart, loginSuccess, logout } from "../user.action";
import { MOCK_INTERACTIONS, MOCK_USER } from "../../../mock/user";
import { TUser, TUserInteractionsState } from "../../../types/user";

describe('UserReducer', () => {
  it('should handler LOGIN_START action', () => {
    expect(userReducer(userInitialState, loginStart())).toEqual(
      {
        ...userInitialState,
        loggingIn: true,
      }
    );
  });

  it('should handler LOGIN_FAILURE action', () => {
    expect(userReducer(userInitialState, loginFailure())).toEqual(
      {
        ...userInitialState,
        loggingIn: false,
      }
    );
  });

  it('should handler LOGOUT action', () => {
    expect(userReducer(userInitialState, logout())).toEqual(
      {
        ...userInitialState,
      }
    );
  });

  it('should handler LOGIN_SUCCESS action', () => {
    expect(userReducer(userInitialState, loginSuccess({email: MOCK_USER.email} as TUser))).toEqual(
      {
        ...userInitialState,
        loggingIn: false,
        data: {
          email: MOCK_USER.email
        }
      }
    );
  });

  it('should handler GET_INTERACTION_SUCCESS action', () => {
    expect(userReducer(userInitialState, getInteractionSuccess(MOCK_INTERACTIONS))).toEqual(
      {
        ...userInitialState,
        interactions: MOCK_INTERACTIONS.reduce((acc, curr) => {
          acc[curr.movie] = curr
          return acc
        }, {} as TUserInteractionsState)
      }
    );
  });

});

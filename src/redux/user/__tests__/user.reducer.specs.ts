import userReducer, { userInitialState } from "../user.reducer";
import { loginFailure, loginStart, loginSuccess, logout } from "../user.action";
import { MOCK_USER } from "../../../mock/user";

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
    expect(userReducer(userInitialState, loginSuccess({email: MOCK_USER.email}))).toEqual(
      {
        ...userInitialState,
        loggingIn: false,
        data: {
          email: MOCK_USER.email
        }
      }
    );
  });

});

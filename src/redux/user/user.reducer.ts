import {
  LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT, LOGIN_START,
} from "./user.const";
import { IUserState } from "../../types/userState";

export const userInitialState: IUserState = {
  data: {
    email: "",
  },
  loggingIn: false,
};

const userReducer = (state = userInitialState, action: { type: any; payload?: any }) => {
  const {
    payload,
    type
  } = action
  switch (type) {
    case LOGIN_START: {
      return {
        ...state,
        loggingIn: true,
      }
    }

    case LOGIN_SUCCESS: {
      return {
        ...state,
        data: {
          email: payload.email,
        },
        loggingIn: false,
      }
    }
    case LOGIN_FAILURE:
      return {
        ...state,
        loggingIn: false,
      }

    case LOGOUT:
      return userInitialState;

    default:
      return state;
  }
};

export default userReducer;

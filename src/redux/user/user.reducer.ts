import {
  LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT, LOGIN_START, GET_INTERACTION_SUCCESS, INTERACT_SUCCESS,
} from "./user.const";
import { IUserState } from "../../types/redux/userState";
import { TUserInteraction, TUserInteractionsState } from "../../types/user";

export const userInitialState: IUserState = {
  data: undefined,
  loggingIn: false,
  interactions: {},
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
          _id: payload._id,
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


    case GET_INTERACTION_SUCCESS: {
      const interactions = payload.reduce((acc: TUserInteractionsState, curr: TUserInteraction) => {
        acc[curr.movie] = curr
        return acc
      }, {})
      return {
        ...state,
        interactions
      }
    }

    case INTERACT_SUCCESS: {
      const interaction = payload.interaction
      return {
        ...state,
        interactions: {
          ...state.interactions,
          [interaction.movie]: interaction,
        }
      }
    }

    default:
      return state;
  }
};

export default userReducer;

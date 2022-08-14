import {
  GET_LIST_START,
  GET_LIST_SUCCESS,
  GET_LIST_FAILURE,
} from "./movie.const";
import { IMovieState } from "../../types/redux/movieState";
import { TMovieWithVotesRes } from "./movie.type";
import { TMovie, TMovieVotes } from "../../types/movie";
import { INTERACT_SUCCESS } from "../user/user.const";

export const movieInitState: IMovieState = {
  list: [],
  total: 0,
  votes: {},
  listLoading: false,
  shareLoading: false,
};

const userReducer = (state = movieInitState, action: { type: any; payload?: any }) => {
  const {
    payload,
    type
  } = action
  switch (type) {
    case GET_LIST_START: {
      return {
        ...state,
        listLoading: true,
      }
    }

    case GET_LIST_SUCCESS: {
      let list: TMovie[] = [], votes: TMovieVotes = {};
      payload.movies?.forEach((item: TMovieWithVotesRes) => {
        const {
          _id,
          title,
          url,
          createdBy,
          description,
          thumbUp,
          thumbDown,
        } = item;

        list.push({_id, title, createdBy: createdBy?.email, description, url});
        votes[_id] = {
          thumbUp,
          thumbDown,
        };
      })
      return {
        ...state,
        list,
        total: payload.totalRecord,
        votes: {
          ...state.votes,
          ...votes
        },
        listLoading: false,
      }
    }
    case GET_LIST_FAILURE: {
      return {
        ...state,
        listLoading: false,
      }
    }
    case INTERACT_SUCCESS: {
      const movie = payload.movie
      return {
        ...state,
        votes: {
          ...state.votes,
          [movie._id]: {
            thumbUp: movie.thumbUp,
            thumbDown: movie.thumbDown,
          },
        }
      }
    }

    default:
      return state;
  }
};

export default userReducer;

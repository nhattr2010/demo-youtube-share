import userReducer from "./user/user.reducer";
import { combineReducers } from 'redux';
import movieReducer from "./movie/movie.reducer";

export default combineReducers({
  user: userReducer,
  movie: movieReducer,
})

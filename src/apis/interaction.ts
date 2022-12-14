import { TMovieWithVotes } from "../redux/movie/movie.type";
import { TUserInteractRes } from "../redux/user/user.type";
import { API_V1_ENDPOINT } from "../constants/common";

export const getInteractions = async (userId: string, movies: string[]): Promise<TMovieWithVotes[]> => {
  const requestOptions = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({user: userId, movies}),
  };
  const response = await fetch(`${API_V1_ENDPOINT}/movie-interaction/all/by-user`, requestOptions);
  return await response.json();
}

export const interact = async (movie: string, user: string, value: number): Promise<TUserInteractRes> => {
  const requestOptions = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({movie, user, value}),
  };
  const response = await fetch(`${API_V1_ENDPOINT}/movie-interaction`, requestOptions);
  return await response.json();
}


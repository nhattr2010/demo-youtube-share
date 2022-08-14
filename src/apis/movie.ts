import { TMovieRes, TMovieSharedRes } from "../redux/movie/movie.type";
import { API_V1_ENDPOINT } from "../constants/common";

export const getList = async (offset: number, limit: number): Promise<TMovieRes> => {
  const requestOptions = {
    method: 'GET',
    headers: {'Content-Type': 'application/json'},
  };
  const response = await fetch(`${API_V1_ENDPOINT}/movie/all?offset=${offset}&limit=${limit}`, requestOptions);
  return await response.json();
}
export const shareMovie = async (url: string, createdBy: string): Promise<TMovieSharedRes> => {
  const requestOptions = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({url, createdBy}),
  };
  const response = await fetch(`${API_V1_ENDPOINT}/movie`, requestOptions);
  return await response.json();
}


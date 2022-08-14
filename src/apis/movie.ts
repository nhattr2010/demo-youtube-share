import { TMovieRes, TMovieSharedRes } from "../redux/movie/movie.type";

export const getList = async (offset: number, limit: number): Promise<TMovieRes> => {
  const requestOptions = {
    method: 'GET',
    headers: {'Content-Type': 'application/json'},
  };
  const response = await fetch(`http://localhost:3001/api/v1/movie/all?offset=${offset}&limit=${limit}`, requestOptions);
  return await response.json();
}
export const shareMovie = async (url: string, createdBy: string): Promise<TMovieSharedRes> => {
  const requestOptions = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({url, createdBy}),
  };
  const response = await fetch('http://localhost:3001/api/v1/movie', requestOptions);
  return await response.json();
}


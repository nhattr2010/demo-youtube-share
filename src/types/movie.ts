export type TMovie = {
  _id: string;
  url: string;
  createdBy: string;
  title: string,
  description: string
}
export type TMovieVote = {
  thumbUp: number;
  thumbDown: number;
}

export type TMovieVotes = {
  [movieId: string]: TMovieVote;
};

export type TUser = {
  _id: string;
  email: string;
}

export type TUserInteraction = {
  _id: string;
  movie: string;
  user: string;
  value: number
}

export type TUserInteractionsState = {
  [movieId: string]: TUserInteraction;
};

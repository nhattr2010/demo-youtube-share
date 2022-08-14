import { TMovieWithVotes, TMovieWithVotesRes } from "../redux/movie/movie.type";
import { TMovie, TMovieVotes } from "../types/movie";

export const MOCK_MOVIE: TMovieWithVotesRes[] = [{
  _id: '1',
  url: "https://www.youtube.com/embed/XqZsoesa55w",
  title: "Lorem ipsum dolor sit amet",
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  createdBy: {_id: '2', email: "Nhat Truong"},
  thumbDown: 11,
  thumbUp: 13
}, {
  _id: '2',
  url: "https://www.youtube.com/embed/XqZsoesa55w",
  title: "Lorem ipsum dolor sit amet",
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  createdBy: {_id: '2', email: "Nhat Truong"},
  thumbDown: 21,
  thumbUp: 23
}, {
  _id: '3',
  url: "https://www.youtube.com/embed/XqZsoesa55w",
  title: "Lorem ipsum dolor sit amet",
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  createdBy: {_id: '2', email: "Nhat Truong"},
  thumbDown: 31,
  thumbUp: 33
}]


export const MOCK_MOVIE_LIST: TMovie[] = [{
  _id: '1',
  url: "https://www.youtube.com/embed/XqZsoesa55w",
  title: "Lorem ipsum dolor sit amet",
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  createdBy: "Nhat Truong"
}, {
  _id: '2',
  url: "https://www.youtube.com/embed/XqZsoesa55w",
  title: "Lorem ipsum dolor sit amet",
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  createdBy: "Nhat Truong"
}, {
  _id: '3',
  url: "https://www.youtube.com/embed/XqZsoesa55w",
  title: "Lorem ipsum dolor sit amet",
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  createdBy: "Nhat Truong"
}]

export const MOCK_MOVIE_VOTES: TMovieVotes = {
  '1': {
    thumbDown: 11,
    thumbUp: 13
  },
  '2': {
    thumbDown: 21,
    thumbUp: 23
  },
  '3': {
    thumbDown: 31,
    thumbUp: 33
  },
}

export const MOCK_NEW_MOVIE: TMovieWithVotesRes = {
  _id: '4',
  url: "https://www.youtube.com/embed/XqZsoesa55w",
  title: "Lorem ipsum dolor sit amet",
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  createdBy: {_id: '2', email: "Nhat Truong"},
  thumbDown: 41,
  thumbUp: 43
};

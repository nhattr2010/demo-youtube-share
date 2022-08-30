## Description

This project is a Demo project base on `Create React App`.

#### Unauthenticated user:

- It will show the home page with list of shared movies by other users, and the login/register from in the header.
- The user can paginate the list of movies.

#### Authenticated user:

- It will show the home page with list of shared movies, current user is able to interact (like, dislike) on each movie,
  or able to see their older interaction on each movie.
- The page allow authorized user to create/share a new movie by using the form and input the movie url, after share the
  movie successfully, the page will redirect to the home page, then the new movie will be on the list.
- The user can paginate the list of movies.

[Demo](http://funnymovies.nhatth.com/)

## Technologies Aspect

- [Create React App](https://github.com/facebook/create-react-app) for Frontend Development
- Redux for State Management
- React Router for Navigation
- Persist State for Local Storage
- Redux Saga for Asynchronous Actions
- Reselect for State Selection
- React Testing Library for Testing

## How to run the app

- You must configure the environment variables before running the app. (.env)
- Runs the app in the development mode.\
  Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Learn More

You can learn more in
the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

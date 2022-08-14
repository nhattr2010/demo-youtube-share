import React from 'react';
import Share from "./Share";
import { fireEvent, screen, waitFor } from '@testing-library/react'
import { useSelector } from "react-redux";
import { renderWithWrappers } from "../test-util/renderWithWrapper";
import * as apis from '../apis/movie';
import { TMovieSharedRes } from "../redux/movie/movie.type";
import * as router from "react-router";

describe("Share", () => {

  beforeEach(() => {
    jest.spyOn(router, 'useNavigate').mockImplementation(() => jest.fn())
  });

  test('Share renders without crash', () => {
    (useSelector as jest.Mock).mockReturnValue({_id: 'userId'});
    renderWithWrappers(<Share/>);
  });

  test('Should not fetch if url is falsy', () => {
    const mockFetch = jest.spyOn(window, 'fetch');
    (useSelector as jest.Mock).mockReturnValue({_id: 'userId'});
    renderWithWrappers(<Share/>);
    const buttonField = screen.getByTestId('share-btn');
    fireEvent.click(buttonField)
    expect(mockFetch).toHaveBeenCalledTimes(0)
  });

  test('Should share the movie and direct to HOME if the data is valid', async () => {
    const mockedNavigator = jest.fn();
    jest.spyOn(router, 'useNavigate').mockImplementation(() => mockedNavigator)

    const mockAPI = jest.spyOn(apis, 'shareMovie');
    mockAPI.mockResolvedValue({status: 200} as TMovieSharedRes);
    
    (useSelector as jest.Mock).mockReturnValue({_id: 'userId'});

    renderWithWrappers(<Share/>);

    const inputField = screen.getByTestId('video-input');
    const buttonField = screen.getByTestId('share-btn');

    fireEvent.change(inputField, {target: {value: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'}});
    fireEvent.click(buttonField)

    expect(mockAPI).toHaveBeenCalledWith(
      'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      'userId'
    )

    await waitFor(() => {
      expect(mockedNavigator).toHaveBeenCalledTimes(1)
    });
  });
})

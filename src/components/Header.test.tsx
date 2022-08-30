import React from 'react';
import Header from "./Header";
import { fireEvent, screen } from '@testing-library/react'
import { useDispatch, useSelector } from "react-redux";
import { renderWithWrappers } from "../test-util/renderWithWrapper";
import * as router from "react-router";

describe("Header", () => {
  beforeEach(() => {
    jest.spyOn(router, 'useNavigate').mockImplementation(() => jest.fn())
  });
  test('Header renders without crash', () => {
    renderWithWrappers(<Header/>);
  });

  test('Should not navigate to home page and click title', () => {
    const mockedNavigator = jest.fn();
    jest.spyOn(router, 'useNavigate').mockImplementation(() => mockedNavigator)
    const mockDispatch = jest.fn();
    (useDispatch as jest.Mock).mockReturnValue(mockDispatch);
    (useSelector as jest.Mock).mockReturnValue(null);
    renderWithWrappers(<Header/>);
    const title = screen.getByTestId('title');
    fireEvent.click(title)
    expect(mockedNavigator).toHaveBeenCalledWith('/');
  });

  test('Should not show user info when user is not logged in', () => {
    const mockDispatch = jest.fn();
    (useDispatch as jest.Mock).mockReturnValue(mockDispatch);
    (useSelector as jest.Mock).mockReturnValue(null);
    renderWithWrappers(<Header/>);
    const userArea = screen.queryByTestId('user-info');
    expect(userArea).not.toBeInTheDocument();
  });

  test('Should show user info when user is logged in', () => {
    const mockedNavigator = jest.fn();
    jest.spyOn(router, 'useNavigate').mockImplementation(() => mockedNavigator)
    const mockDispatch = jest.fn();
    (useDispatch as jest.Mock).mockReturnValue(mockDispatch);
    (useSelector as jest.Mock).mockReturnValue({
      email: 'a@a.com'
    });
    renderWithWrappers(
      <Header/>
    )
    ;
    const userArea = screen.queryByTestId('user-info');
    const shareBtn = screen.getByTestId('share-btn');
    const logoutBtn = screen.getByTestId('logout-btn');
    expect(userArea).toBeInTheDocument();

    fireEvent.click(shareBtn)
    expect(mockedNavigator).toHaveBeenCalledWith('/share');

    fireEvent.click(logoutBtn)
    expect(mockDispatch).toHaveBeenCalledWith({"type": "LOGOUT"});
  });
})

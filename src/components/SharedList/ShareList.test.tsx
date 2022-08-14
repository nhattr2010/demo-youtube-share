import React from 'react';
import { renderWithWrappers } from "../../test-util/renderWithWrapper";
import { fireEvent, screen } from '@testing-library/react'
import { useDispatch, useSelector } from "react-redux";
import AuthForm from "../AuthForm/AuthForm";

describe("AuthForm", () => {
  test('AuthForm renders without crash', () => {
    renderWithWrappers(<AuthForm/>);
  });

  test('Should not dispatch action when isLogging in and click button', () => {
    const mockDispatch = jest.fn();
    (useDispatch as jest.Mock).mockReturnValue(mockDispatch);
    (useSelector as jest.Mock).mockReturnValue(true);
    renderWithWrappers(<AuthForm/>);
    const button = screen.getByTestId('login-btn');
    fireEvent.click(button)
    expect(mockDispatch).toHaveBeenCalledTimes(0);
  });

  test('Should dispatch login action when click button', () => {
    const mockDispatch = jest.fn();
    (useDispatch as jest.Mock).mockReturnValue(mockDispatch);
    renderWithWrappers(<AuthForm/>);
    const button = screen.getByTestId('login-btn');
    fireEvent.click(button)
    expect(mockDispatch).toHaveBeenCalledWith({
      type: 'LOGIN',
      payload: {
        email: '',
        password: ''
      }
    });
  });
})

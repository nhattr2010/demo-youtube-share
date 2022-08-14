import React from 'react';
import AuthForm from "./AuthForm";
import { renderWithWrappers } from "../../test-util/renderWithWrapper";
import { fireEvent, screen } from '@testing-library/react'
import { useDispatch, useSelector } from "react-redux";

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
    expect(button).toBeDisabled();
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

  test('Should dispatch login action when click button with new value', () => {
    const mockDispatch = jest.fn();
    (useDispatch as jest.Mock).mockReturnValue(mockDispatch);
    renderWithWrappers(<AuthForm/>);
    const button = screen.getByTestId('login-btn');
    const emailField = screen.getByTestId('email');
    const passwordField = screen.getByTestId('password');

    fireEvent.change(emailField, {target: {value: 'test@email.com'}});
    fireEvent.change(passwordField, {target: {value: 'password'}});
    fireEvent.click(button)
    expect(mockDispatch).toHaveBeenCalledWith({
      type: 'LOGIN',
      payload: {
        email: 'test@email.com',
        password: 'password'
      }
    });
  });
})

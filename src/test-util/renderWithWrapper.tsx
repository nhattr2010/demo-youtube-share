import React, { ReactElement, FC, PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { render } from "@testing-library/react";
import { createStore } from "redux";
import rootReducer from '../redux/root.reducer';

export function renderWithWrappers(
  ui: ReactElement,
  {store}: { store?: any } = {}
) {
  const Wrapper: FC<PropsWithChildren<unknown>> = ({children}) => {
    return (
      <Provider store={store || createStore(rootReducer)}>
        {children}
      </Provider>
    );
  };

  return render(ui, {wrapper: Wrapper});
}

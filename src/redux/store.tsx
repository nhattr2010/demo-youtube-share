import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import rootReducer from "./root.reducer";
import rootSagas from "./root.saga";
import { IApplicationState } from "../types/redux/applicationState";
import { userInitialState } from "./user/user.reducer";
import { movieInitState } from "./movie/movie.reducer";
// Create sagas middleware
const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
  //@ts-ignore
  (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
    //@ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      trace: true,
      traceLimit: 100,
    })) ||
  compose;

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};

export const appState: IApplicationState = {
  user: userInitialState,
  movie: movieInitState
}

function configureStore(initState: IApplicationState) {
  const persistedRootReducer = persistReducer(
    persistConfig,
    rootReducer
  );

  const store = createStore(
    persistedRootReducer,
    //@ts-ignore
    initState,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );
  let persistor = persistStore(store)
  // Running sagas
  sagaMiddleware.run(rootSagas);

  return {store, persistor};
}

export default configureStore(appState);

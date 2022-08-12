import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import rootReducer from "./root.reducer";
import rootSagas from "./root.saga";
import { IApplicationState } from "../types/applicationState";
import { userInitialState } from "./user/user.reducer";
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

const appState: IApplicationState = {
  user: userInitialState
}

function configureStore(initState: IApplicationState) {
  const persistedRootReducer = persistReducer(
    persistConfig,
    rootReducer
  );

  const store = createStore(
    persistedRootReducer,
    initState,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );
  let persistor = persistStore(store)
  // Running sagas
  sagaMiddleware.run(rootSagas);

  return {store, persistor};
}

export default configureStore(appState);

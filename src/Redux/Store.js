import { createStore, applyMiddleware } from 'redux'
import { persistStore } from 'redux-persist'
import logger from 'redux-logger'
import rootReducer from './rootReducer'


export const store = createStore(rootReducer, applyMiddleware(logger))

export const persistor = persistStore(store);


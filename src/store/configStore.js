import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import charactersReducer from '../reducers/characters.reducer'
import thunk from 'redux-thunk'


export default () => {
  const store = createStore(
    combineReducers({
      characters: charactersReducer
    }),
    compose(
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )

  );
  return store
}
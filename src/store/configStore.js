import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import charactersReducer from '../reducers/characters.reducer';
import comicsReducer from '../reducers/comics.reducer';
import eventsReducer from '../reducers/events.reducer';
import seriesReducer from '../reducers/series.reducer';
import filterReducer from '../reducers/filters.reducer';
import fightReducer from '../reducers/fight.reducer';
import modalItemReducer from '../reducers/modalItem.reducer';
import thunk from 'redux-thunk';


export default () => {
  const store = createStore(
    combineReducers({
      characters: charactersReducer,
      comics: comicsReducer,
      events: eventsReducer,
      series: seriesReducer,
      filters: filterReducer,
      fight: fightReducer,
      modalItem: modalItemReducer
    }),
    compose(
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (a) => a
    )

  );
  return store
}
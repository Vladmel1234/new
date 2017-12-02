import { createStore, applyMiddleware, combineReducers } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import thunk from 'redux-thunk';
import bookings from 'reducers/bookings';
import activity from 'reducers/activity';
import { composeWithDevTools } from 'redux-devtools-extension';

export const history = createHistory();
const routMiddleware = routerMiddleware(history);

const rootReducer = combineReducers({
  bookings,
  activity,
  routing: routerReducer
});


export default createStore(rootReducer, composeWithDevTools(applyMiddleware(routMiddleware, thunk)));

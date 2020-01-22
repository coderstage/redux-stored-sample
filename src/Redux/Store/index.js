import {Middleware} from 'redux-stored';
import {
  createStore as Store,
  applyMiddleware as Apply,
  combineReducers as Combine,
}
from 'redux';

/**
 * Reducers
 */
import products from '../Reducers/Products';

/**
 * Initial States
 */
const Defaults = {};

/**
 * Combine Reducers
 */
const Reducers = Combine({
  products,
});

/**
 * Export store
 */
export default Store(
  Reducers,
  Defaults,
  Apply(Middleware)
);
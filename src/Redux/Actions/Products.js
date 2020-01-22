import {
  GET_PRODUCTS
}
from '../../Constants/Types';


/**
* Get all products coming from API
*/
export const getProducts = (query) => {

  return (store) => {
    /**
    * Get Mock Products and Dispatch
    */
    store.products(query, results => store.dispatch({
      type: GET_PRODUCTS,
      payload: results
    }))
  };
};
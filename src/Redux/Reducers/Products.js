import {GET_PRODUCTS} from '../../Constants/Types';

/**
 * Default States
 */
const InitialStates = {
  items: [],
};

/**
 * Export Products Reducer
 */
export default (state = InitialStates, action) => {

  switch(action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        items: action.payload
      };
    default:
      return state;
  }
};
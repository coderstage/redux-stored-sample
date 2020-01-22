import {Register} from 'redux-stored';

/**
 * Containers
 */
import Products from '../../Screens/Products';

/**
 * Actions
 */
import {getProducts} from '../Actions/Products';

/**
 * Models
 */
import * as ProductService from '../../Models/Services/Products';


/**
 * Register containers and actions with models
 * to connect to the components
 */
export default Register(
  {
    Products
  },
  {
    getProducts,
  },
  {
    ...ProductService,
  }
);

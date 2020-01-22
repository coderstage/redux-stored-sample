import React from 'react';

/**
 * Components
 */
import Header from '../../Components/Header';


/**
 * Products Page
*/
class Products extends React.Component {

  /**
   * Map the states using
   * static property instead
   * of creating a connection manually
   */
  static map = {
    /**
     * Reducer's names
     */
    products: [
      /**
       * Your States
       */
      'items'
    ]
  };

  /**
   * Render
   */
  render() {
    return (
      <div id="products">
        {/**
        * Header with props populated
        */}
        <Header {...this.props}/>
        {/**
        * Content of the page
        */}
        <div id="content">
          <div className="inner">
            <button onClick={() => this.props.getProducts()}>Click Me</button>
            <ul>
              {this.props.items.map((item, index) => (
                <li key={index}>
                  <strong>{item.title}</strong>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

/**
 * Export component as usual
 */
export default Products;
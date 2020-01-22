/**
 * Fetch Mock Products
 */
export const products = (query, callback) => {
  /**
   * Your logic supposedly here,
   * this time we have a mock API results below
   */
  return callback([
    {
      id: 1,
      title: 'Iphone'
    },
    {
      id: 2,
      title: 'Ipad'
    },
    {
      id: 3,
      title: 'Macbook'
    },
  ])
};
/**
 * Product interface - defines the structure of a product object.
 * Each product has a unique id, a name, and a price.
 */
export interface Product {
  id: number;
  name: string;
  price: number;
}

/**
 * CartItem interface - extends Product with a quantity field
 * to track how many of each product are in the cart.
 */
export interface CartItem {
  product: Product;
  quantity: number;
}

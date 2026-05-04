import { Component } from '@angular/core';
import { Product, CartItem } from './models/product.model';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CartComponent } from './components/cart/cart.component';

/**
 * AppComponent - Root component of the Mini Product Cart application.
 * Manages the product data and cart state.
 * All cart logic (add/remove) is handled here and passed down to child components.
 */
@Component({
  selector: 'app-root',
  standalone: true,
  // Import child components so they can be used in the template
  imports: [ProductListComponent, CartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class App {
  // Application title
  title = 'Mini Product Cart';

  // Array of available products (hardcoded data - no API used)
  products: Product[] = [
    { id: 1, name: 'Wireless Headphones', price: 2499.00 },
    { id: 2, name: 'Bluetooth Speaker', price: 1899.00 },
    { id: 3, name: 'USB-C Hub', price: 1299.00 },
    { id: 4, name: 'Mechanical Keyboard', price: 3499.00 },
    { id: 5, name: 'Wireless Mouse', price: 999.00 },
    { id: 6, name: 'Laptop Stand', price: 1599.00 }
  ];

  // Array to hold cart items (products with quantities)
  cartItems: CartItem[] = [];

  /**
   * Adds a product to the cart.
   * If the product already exists in the cart, its quantity is increased by 1.
   * If it's a new product, it's added with quantity 1.
   * Uses the product's unique id for tracking.
   */
  addToCart(product: Product): void {
    // Check if the product already exists in the cart using its unique id
    const existingItem = this.cartItems.find(
      item => item.product.id === product.id
    );

    if (existingItem) {
      // Product exists - increase quantity by 1
      existingItem.quantity++;
    } else {
      // New product - add to cart with quantity 1
      this.cartItems.push({ product: product, quantity: 1 });
    }
  }

  /**
   * Removes a product from the cart by its unique id.
   * If quantity > 1, decreases quantity by 1.
   * If quantity is 1, removes the item entirely from the cart.
   */
  removeFromCart(productId: number): void {
    // Find the index of the cart item with the matching product id
    const index = this.cartItems.findIndex(
      item => item.product.id === productId
    );

    if (index !== -1) {
      if (this.cartItems[index].quantity > 1) {
        // Decrease quantity by 1
        this.cartItems[index].quantity--;
      } else {
        // Remove item entirely from cart using splice
        this.cartItems.splice(index, 1);
      }
    }
  }
}

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { CartItem } from '../../models/product.model';

/**
 * CartComponent - Displays the shopping cart with items, quantities, and total.
 * Uses *ngIf to show a message when the cart is empty.
 * Uses *ngFor to list all cart items.
 */
@Component({
  selector: 'app-cart',
  standalone: true,
  // Import NgFor and NgIf for structural directives
  imports: [NgFor, NgIf],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  // Input: receives the cart items array from the parent (AppComponent)
  @Input() cartItems: CartItem[] = [];

  // Output: emits the product id when "Remove" button is clicked
  @Output() removeFromCart = new EventEmitter<number>();

  /**
   * Calculates the total number of items in the cart.
   * Sums up the quantity of each cart item.
   */
  getTotalItems(): number {
    return this.cartItems.reduce((total, item) => total + item.quantity, 0);
  }

  /**
   * Calculates the total price of all items in the cart.
   * Multiplies each product's price by its quantity and sums them up.
   */
  getTotalPrice(): number {
    return this.cartItems.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  }

  /**
   * Called when the user clicks "Remove" on a cart item.
   * Emits the product id to the parent component.
   */
  onRemove(productId: number): void {
    this.removeFromCart.emit(productId);
  }
}

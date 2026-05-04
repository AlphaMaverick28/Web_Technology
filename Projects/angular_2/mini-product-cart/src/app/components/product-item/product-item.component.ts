import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/product.model';

/**
 * ProductItemComponent - Displays a single product as a card.
 * Uses @Input to receive product data from the parent component.
 * Uses @Output to emit an event when the "Add to Cart" button is clicked.
 */
@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  // Input: receives a product object from the parent (ProductListComponent)
  @Input() product!: Product;

  // Output: emits the product when "Add to Cart" is clicked
  @Output() addToCart = new EventEmitter<Product>();

  /**
   * Called when the user clicks the "Add to Cart" button.
   * Emits the product object to the parent component.
   */
  onAddToCart(): void {
    this.addToCart.emit(this.product);
  }
}

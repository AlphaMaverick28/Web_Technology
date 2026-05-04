import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgFor } from '@angular/common';
import { Product } from '../../models/product.model';
import { ProductItemComponent } from '../product-item/product-item.component';

/**
 * ProductListComponent - Displays the full list of available products.
 * Uses *ngFor to iterate over products and renders a ProductItemComponent for each.
 * Passes the addToCart event up to the parent (AppComponent).
 */
@Component({
  selector: 'app-product-list',
  standalone: true,
  // Import NgFor for *ngFor directive and ProductItemComponent for rendering each product
  imports: [NgFor, ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  // Input: receives the list of products from the parent (AppComponent)
  @Input() products: Product[] = [];

  // Output: emits the selected product when "Add to Cart" is clicked
  @Output() addToCart = new EventEmitter<Product>();

  /**
   * TrackBy function for *ngFor optimization.
   * Helps Angular identify each product by its unique id.
   */
  trackByProductId(index: number, product: Product): number {
    return product.id;
  }

  /**
   * Handles the addToCart event from the child ProductItemComponent.
   * Passes the product up to the parent (AppComponent).
   */
  onAddToCart(product: Product): void {
    this.addToCart.emit(product);
  }
}

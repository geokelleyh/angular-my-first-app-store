// Step 1  Next, define the behavior that should happen when the user clicks the button.
// Recall that it's the parent, product list component—not the product alerts component—that acts when the child raises the event.
// In product-list.component.ts,define an onNotify() method, similar to the share() method:

// Go to product-list.component.html





import { Component } from '@angular/core';

import { products } from '../products';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}

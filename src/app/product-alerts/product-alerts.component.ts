


    // Notice the @Component() decorator
    // This indicates that the following class is a component
    // It provides metadata about the component, including its selector, templates, and styles.
    // The selector identifies the component.
    // The selector is the name you give the Angular component when it is rendered as an HTML element on the page
    // By convention, Angular component selectors begin with the prefix app-, followed by the component name.
// The template and style filenames reference the HTML and CSS files that StackBlitz generates.
// The component definition also exports the class, ProductAlertsComponent, which handles functionality for the component.

// Step 1 Set up the new product alerts component to receive a product as input:
//     Import Input from @angular/core

// Step 2 In the ProductAlertsComponent class definition, define a property named product with an @Input() decorator.
// The @Input() decorator indicates that the property value passes in from the component's parent, the product list component.
// export class ProductAlertsComponent implements OnInit {
//   @Input() product;
//   constructor() { }
//   ngOnInit() {
//   }
// }
//  Go to the product-alerts.component.html template

// Step 3 To make the "Notify Me" button work, you need to configure two things:

// the product alert component to emit an event when the user clicks "Notify Me"
// the product list component to act on that event
// Open product-alerts.component.ts.
// Import Output and EventEmitter from @angular/core:


// Step 4 In the component class, define a property named notify with an @Output() decorator and an instance of EventEmitter().
// This allows the product alert component to emit an event when the value of the notify property changes

// Go to  product-alerts.component.html












import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core'; // Step 1
import { Output, EventEmitter } from '@angular/core'; // Step 3

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {
  @Input() product; // Step 2
  @Output() notify = new EventEmitter(); // Step 5
  constructor() { }

  ngOnInit() {
  }

}

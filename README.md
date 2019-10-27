#  This is the first demonstration of Angular from the official Angular documentation.  It is located at angular.io/start

# These are the first steps on the first file, created at startup, product-list.component.html
<!-- Step 1   In the product-list folder, open the template file product-list class="component html"

Step 2  Modify the product list template to display a list of product names - Each product in the list displays the same one, one after another on the page.  To iterate over the predifined list of products put the "*ngFor directive on a div as follows <div *ngFor="let product of products">
</div>" -->
<!--
Step 3  To display the names of the products use the interpolation syntax {{}} in the <div> element and add an <h3> tag for the property's name -->
<!-- Step 4 To make each product name a link to product details, add the <a> element and set its title to be the product's name by using the property binding [ ] syntax, as follows: -->
<!--
Step 5 Add the product descriptions. On the <p> element, use an *ngIf directive so that Angular only creates the <p> element if the current product has a description.
Step 6 Add a button so users can share a product with friends. Bind the button's click event to the share() method (in product-list.component.ts). Event binding uses a set of parentheses, ( ), around the event, as in the following <button> element: -->


<!-- The app now has a product list and sharing feature. In the process, you've learned to use five common features of Angular's template syntax:

    *ngFor
    *ngIf
    Interpolation {{ }}
    Property binding [ ]
    Event binding () --> -->


# Per instructions, I created a new component, which was product-alert component.  I elected to use angular.cli, in which i entered the command "ng g c product-alerts"  with ng being syntax for angular, tag -g is shorthand for the generate syntax, and tag -c being shorthand for component.  "product-alerts was name of the component created.

# Next steps were done on the product-alerts.component.ts, open this file    



    Notice the @Component() decorator. This indicates that the following class is a component. It provides metadata about the component, including its selector, templates, and styles.

        The selector identifies the component. The selector is the name you give the Angular component when it is rendered as an HTML element on the page. By convention, Angular component selectors begin with the prefix app-, followed by the component name.

        The template and style filenames reference the HTML and CSS files that StackBlitz generates.

    The component definition also exports the class, ProductAlertsComponent, which handles functionality for the component.

# Set up the new product alerts component to receive a product as input:

    Import Input from @angular/core
#  In the ProductAlertsComponent class definition, define a property named product with an @Input() decorator.
// The @Input() decorator indicates that the property value passes in from the component's parent, the product list component.
// export class ProductAlertsComponent implements OnInit {
//   @Input() product;
//   constructor() { }
//   ngOnInit() {
//   }
// }
# Go to the product-alerts.component.html template

# Define the view for the new product-alerts component.

    Open the product-alerts.component.html template and replace the placeholder paragraph with a "Notify Me" button that appears if the product price is over $700.

    <p *ngIf="product.price > 700">
  <button>Notify Me</button>
</p>


#  Display product-alerts component as a child of the product-list
# Open up product-list.component.html
# Pass the current product as input to the component using property binding
<button (click)="share()">
  Share
</button>

<app-product-alerts
  [product]="product">
</app-product-alerts>


# Output

To make the "Notify Me" button work, you need to configure two things:

    the product alert component to emit an event when the user clicks "Notify Me"
    the product list component to act on that event

    Open product-alerts.component.ts.

    Import Output and EventEmitter from @angular/core:

# go to product-alerts.component.html
Update the "Notify Me" button with an event binding to call the notify.emit() method



# Next, define the behavior that should happen when the user clicks the button.
 Recall that it's the parent, product list component—not the product alerts component—that acts when the child raises the event. 
 In product-list.component.ts, define an onNotify() method, similar to the share() method:

# Go to product-list.component.html

Finally, update the product list component to receive output from the product alerts component.

In product-list.component.html, bind the app-product-alerts component (which is what displays the "Notify Me" button) to the onNotify() method of the product list component.











# AngularMyFirstAppStore

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.14.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

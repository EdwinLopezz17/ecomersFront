import { Component } from '@angular/core';
import {ProductCardComponent} from "../product-card/product-card.component";
import {SidebarComponent} from "../sidebar/sidebar.component";

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    ProductCardComponent,
    SidebarComponent
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

}

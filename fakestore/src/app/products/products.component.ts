import { Component, OnInit } from '@angular/core';
import { IProduct } from './IProduct';
import { ProductListService } from './product-list.service';

@Component({
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  pageTitle: string = 'List of products';
  private _productListService;
  products: IProduct[] = [];
  errorMessage: string = ''; 
  imageWidth: number = 50;
  imageMargin: number = 2; 

  constructor(productListService : ProductListService) {
    this._productListService = productListService;
   }

  ngOnInit(): void {
    this._productListService.getProducts().subscribe({
      next: products => this.products = products,
      error: err => this.errorMessage = err
    });
  }

}

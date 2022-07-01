import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './IProduct';
import { ProductDetailService } from './product-detail.service';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle = 'Product detail';
  errorMessage = '';
  product: IProduct | undefined;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private productDetailService: ProductDetailService) { 

              }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if(id)
      this.getProduct(id);
  }

  getProduct(id: string): void{
    this.productDetailService.getProduct(id).subscribe({
      next: product => this.product = product,
      error: err => this.errorMessage = err
    });
  }

  onBack(): void{
    this.router.navigate(['/products']);
  }

}

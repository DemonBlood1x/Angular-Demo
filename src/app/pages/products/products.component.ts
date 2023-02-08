import { Product } from './interfaces/product.interface';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from './services/products.service';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit {
  products!: Product[];

  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  start =  new Date();
  end =  new Date();

  constructor(private productSvc: ProductsService) {}

  ngOnInit(): void {

    this.productSvc.getProducts().subscribe((data: any) => {
      this.products = data;
    });
  }

}

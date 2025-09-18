import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { ProductDataService } from '../services/product-data';
import { Product } from '../models/product';

@Component({
  selector: 'app-list-products',
  imports: [CommonModule, RouterModule],
  templateUrl: './list-product.html',
  styleUrls: ['./list-product.css']
})

export class ListProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(
    private proddata: ProductDataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.proddata.getList().subscribe((data) => {
      this.products = data;
    });
  }

  deleteProduct(id: string) {
    if (confirm('Are you sure you want to delete this item?')) {
      this.proddata.deleteItem(id).subscribe((data) => {
        this.products = data;
      });
    }
  }

  editProduct(id: string) {
    this.router.navigate(['/update-product', id]);
  }
}
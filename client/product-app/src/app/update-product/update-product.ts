import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductDataService } from '../services/product-data';
import { Product } from '../models/product';

@Component({
  selector: 'app-update-product',
  imports: [CommonModule, FormsModule],
  templateUrl: './update-product.html',
  styleUrls: ['./update-product.css']
})

export class UpdateProductComponent implements OnInit {
  product: Product = new Product();
  productId: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private proddata: ProductDataService
  ) { }

  ngOnInit(): void {
    this.productId = this.route.snapshot.params['id'];
    this.getProduct();
  }

  getProduct() {
    this.proddata.getItem(this.productId).subscribe((data) => {
      this.product = data;
    });
  }

  updateProduct() {
    const updateData = {
      objid: this.productId,
      id: this.product.id,
      name: this.product.name,
      description: this.product.description,
      price: this.product.price,
      units: this.product.units
    };
    
    this.proddata.updateItem(updateData as any).subscribe((data) => {
      if (data.ok) {
        alert('Product updated successfully!');
        this.router.navigate(['/list-product']);
      }
    });
  }
}
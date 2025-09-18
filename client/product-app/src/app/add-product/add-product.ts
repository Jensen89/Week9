import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductDataService } from '../services/product-data';
import { Product } from '../models/product';

@Component({
  selector: 'app-add-product',
  imports: [CommonModule, FormsModule],
  templateUrl: './add-product.html',
  styleUrls: ['./add-product.css']
})

export class AddProductComponent implements OnInit {
  product: Product = new Product();
  idErrorShow: string = 'hide';
  idErrorMsg: string = '';
  noticeShow: string = 'hide';
  noticeMsg: string = '';

  constructor(private proddata: ProductDataService) { }

  ngOnInit(): void {
  }

  checkValidId(event: any) {
    this.proddata.checkValidId(event).subscribe((data) => {
      if (data.success == 0) {
        this.idErrorMsg = "ID already exists. Try " + (data.topnum + 1);
        this.idErrorShow = 'show';
      } else {
        this.idErrorShow = 'hide';
        this.idErrorMsg = '';
      }
    });
  }

  addNewProduct(event: any) {
    event.preventDefault();
    
    if (this.product.id && this.product.name) {
      this.proddata.add(this.product).subscribe((data) => {
        if (data.err === null) {
          this.noticeMsg = "Product added successfully!";
          this.noticeShow = 'show';
          this.product = new Product(); //Reset form
          
          setTimeout(() => {
            this.noticeShow = 'hide';
          }, 3000);
        } else {
          this.noticeMsg = data.err;
          this.noticeShow = 'show';
        }
      });
    }
  }
}
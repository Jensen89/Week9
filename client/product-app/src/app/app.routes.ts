import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { AddProductComponent } from './add-product/add-product';
import { ListProductsComponent } from './list-product/list-product';
import { UpdateProductComponent } from './update-product/update-product';

export const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'add-product', component: AddProductComponent },
  { path: 'list-product', component: ListProductsComponent },
  { path: 'update-product/:id', component: UpdateProductComponent }

];
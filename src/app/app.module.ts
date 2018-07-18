import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ReadProductsComponent } from './products/read-products/read-products.component';
import { ProductService } from './service/product.service';
import { CategoryService } from './service/category.service';
import { CreateProductComponent } from './products/create-product/create-product.component';
import { ReadOneProductComponent } from './products/read-one-product/read-one-product.component';
import { UpdateProductComponent } from './products/update-product/update-product.component';
import { DeleteProductComponent } from './products/delete-product/delete-product.component';
import { BurlService } from './service/burl.service';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
@NgModule({
  declarations: [
		AppComponent,
		ReadProductsComponent,
		CreateProductComponent,
		ReadOneProductComponent,
		UpdateProductComponent,
		DeleteProductComponent
  ],
  imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		ReactiveFormsModule,
		NgxPaginationModule
  ],
  providers: [
		ProductService,
		CategoryService,
		BurlService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

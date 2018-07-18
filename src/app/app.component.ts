import { Component } from '@angular/core';
 
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
 
export class AppComponent {
    // properties for child components
    title="Read Products";
    product_id;
    // properties used to identify what views to show
    show_read_products_html=true;
	show_create_product_html=false;	
	show_read_one_product_html=false;
	show_update_product_html=false;
	show_delete_product_html=false;
	// show the 'create product form'
showCreateProduct($event){
    // set title
    this.title=$event.title;
 
    // hide all html then show only one html
    this.hideAll_Html();
    this.show_create_product_html=true;
}
 
// show products list
showReadProducts($event){
    // set title
    this.title=$event.title;
    // hide all html then show only one html
    this.hideAll_Html();
    this.show_read_products_html=true;
}
 
// hide all html views
hideAll_Html(){
    this.show_read_products_html=false;
    this.show_read_one_product_html=false;
    this.show_create_product_html=false;
    this.show_update_product_html=false;
    this.show_delete_product_html=false;
}
// show details of a product
showReadOneProduct($event){
    // set title and product ID
    this.title=$event.title; 
    this.product_id=$event.product_id;
    // hide all html then show only one html
    this.hideAll_Html();
    this.show_read_one_product_html=true;
 }
	 // show the 'update product form'
	showUpdateProduct($event){
	 
		// set title and product ID
		this.title=$event.title;
		this.product_id=$event.product_id;
	 
		// hide all html then show only one html
		this.hideAll_Html();
		this.show_update_product_html=true;
	}
	
// show 'are you sure?' prompt to confirm deletion of a record
showDeleteProduct($event){
 
    // set title and product ID
    this.title=$event.title;
    this.product_id=$event.product_id;
 
    // hide all html then show only one html
    this.hideAll_Html();
    this.show_delete_product_html=true;
}
}
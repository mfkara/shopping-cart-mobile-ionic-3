import { ShoppingCartPage } from "./../shopping-cart/shopping-cart";
import { CartService } from "./../../providers/cart.service";
import { CategoryService } from "./../../providers/category.service";
import { Category } from "../../entities/category";
import { ProductDetailPage } from "./../product-detail/product-detail";
import { Product } from "../../entities/product";
import { ProductService } from "../../providers/product.service";
import { Component } from "@angular/core";
import {
  IonicPage,
  LoadingController,
  NavController,
  NavParams
} from "ionic-angular";

@IonicPage({
  name:'ProductPage',
  segment:'product'
})
@Component({
  selector: "page-product",
  templateUrl: "product.html",
  providers: [ProductService, CategoryService]
})
export class ProductPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public productService: ProductService,
    public categoryService: CategoryService,
    public cartService: CartService,
    public loadingController: LoadingController
  ) {}

  products: Product[] = [];
  categories: Category[] = [];
  selectedCategory: string;
  filterText: string;
  cartCount: number = 0;
  ionViewDidLoad() {
    console.log("ionViewDidLoad ProductPage");


      this.getProducts();
      this.getCategories();


  }

  getProducts() {
    let loader=this.loadingController.create( {content:'Please wait....'} );
    loader.present().then(() => {
    this.productService.getProducts().subscribe(p => {
      this.products = p;
      loader.dismiss();

    });});
  }

  itemTapped(event, product) {
    this.navCtrl.push(ProductDetailPage, { item: product });
  }

  getCategories() {
    let loader=this.loadingController.create( {content:'Please wait....'} );
    loader.present().then(() => {
    this.categoryService
      .getCategories()
      .subscribe(data =>{
        this.categories = data;
        loader.dismiss();

      });});
  }
  getItems() {
    var val = this.filterText;
    if (val && val.trim() != "") {
      this.productService.getProducts(this.selectedCategory).subscribe(p => {
        this.products = p.filter(item => {
          return item.productName.toLowerCase().indexOf(val.toLowerCase()) > -1;
        });
      });
    } else {
      this.productService.getProducts(this.selectedCategory).subscribe(p => {
        this.products = p;
      });
    }
  }
  goToCart() {
    this.navCtrl.push(ShoppingCartPage);
  }
  ionViewWillEnter() {
    if (this.cartService.cartCount) {
      this.cartCount = this.cartService.cartCount;
    }
  }
}

import { CartItem } from '../../entities/cart-item';
import { CartService } from "../../providers/cart.service";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

@IonicPage()
@Component({
  selector: "page-shopping-cart",
  templateUrl: "shopping-cart.html"
})
export class ShoppingCartPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public cartService: CartService
  ) {}

  cartItems:CartItem[]=[];

  ionViewDidLoad() {
    console.log("ionViewDidLoad ShoppingCartPage");
    this.cartItems=this.cartService.list();
  }
}

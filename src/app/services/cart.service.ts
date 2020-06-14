import { Injectable } from '@angular/core';
import {CartItem} from "../models/cart-item";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems: CartItem[] = [];
  totalPrice: Subject<number> = new Subject<number>();
  totalQuantity: Subject<number> = new Subject<number>();

  constructor() {
    this.setCartItems();
  }

  addToCart(cartItem: CartItem){
    let alreadyExistInCart: boolean = false;
    let existingCartItem: CartItem = undefined;

    if(this.cartItems.length > 0){
      existingCartItem = this.cartItems.find(tempCartItem => tempCartItem.id === cartItem.id);
      alreadyExistInCart = (existingCartItem != undefined)
    }
    if(alreadyExistInCart){
      existingCartItem.quantity++;
    }
    else{
      this.cartItems.push(cartItem);
    }
    this.calculateTotalPrice();
    this.updateLocalStorage();
  }

  calculateTotalPrice(){
    let totalPriceValue: number = 0;
    let totalQuantityValue: number = 0;
    for (let currentCartItem of this.cartItems){
      totalPriceValue += currentCartItem.quantity * currentCartItem.unitPrice;
      totalQuantityValue += currentCartItem.quantity;
    }
    this.totalPrice.next(totalPriceValue);
    this.totalQuantity.next(totalQuantityValue);
  }

  decrementQuantity(cartItem: CartItem) {
    cartItem.quantity--;
    if (cartItem.quantity == 0){
      this.removeCartItem(cartItem);
    }
    else{
      this.calculateTotalPrice();
    }
    this.updateLocalStorage();
  }

  removeCartItem(cartItem: CartItem){
    const itemIndex = this.cartItems.findIndex((tempCartItem) => {
      return tempCartItem.id === cartItem.id;
    });
    if (itemIndex > -1){
      this.cartItems.splice(itemIndex, 1);
      this.calculateTotalPrice();
    }
    this.updateLocalStorage();
  }

  updateLocalStorage(){
    localStorage.setItem("cartItems", JSON.stringify(this.cartItems));
  }

  clearLocalStorage(){
    localStorage.removeItem("cartItems");
    this.cartItems = null;
  }

  private setCartItems() {
    this.cartItems = JSON.parse(localStorage.getItem("cartItems"));
  }
}

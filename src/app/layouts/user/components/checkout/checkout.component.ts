import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {CartItem} from "../../../../models/cart-item";
import {CartService} from "../../../../services/cart.service";
import {UserService} from "../../../../services/user.service";
import {OrderService} from "../../../../services/order.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  checkoutForm: FormGroup;
  cartItems: CartItem[] = [];
  totalPrice: number = 0;
  totalQuantity: number = 0;

  expirationMonth = [1,2,3,4,5,6,7,8,9,10,11,12];
  expirationYear = [2020,2021,2022,2023,2024,2025];


  constructor(private _formBuilder: FormBuilder,
              private _cartService: CartService,
              private _userService: UserService,
              private _orderService: OrderService,
              private _router: Router) { }

  ngOnInit(): void {
    this.cartDetails();
    this.customerDetails();
  }

  onSubmit() {
    console.log('purchase');
    console.log(this.checkoutForm.value);
    this._orderService.save(this.checkoutForm.value).subscribe(
      response => {
        this._cartService.clearLocalStorage();
        this._router.navigateByUrl("/");
      }
    );
  }

  cartDetails(){
    this.cartItems = this._cartService.cartItems;
    this._cartService.totalPrice.subscribe(
      data => this.totalPrice = data
    )
    this._cartService.totalQuantity.subscribe(
      data => this.totalQuantity = data
    )
    this._cartService.calculateTotalPrice();
  }

  private customerDetails() {
    const token = JSON.parse(localStorage.getItem('currentUser'));
    if (token != null){
      this._userService.getByUsername(token['username']).subscribe(
        data => {
          this.checkoutForm = this.initForm(data);
        }
      );
    }
  }

  private initForm(data) {
    return this._formBuilder.group({
      customerId: data['id'],
      cartItems: [this.cartItems],
      totalQuantity: [this.totalQuantity],
      totalPrice: [this.totalPrice, ],
      name: data['name'],
      phoneNumber: data['phoneNumber'],
      address: data['address'],
      city: data['city'],
      state: data['state'],
      zipcode: data['zipcode']
      // cc: this._formBuilder.group({
      //   nameOnCC: [null],
      //   ccNumber: [null],
      //   cvv: [null],
      //   expMonth: [null],
      //   expYear: [null]
      // })
    })
  }

}

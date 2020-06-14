import {Component, OnInit} from '@angular/core';
import {OrderService} from "../../../../../services/order.service";
import {UserService} from "../../../../../services/user.service";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders: [] = [];


  constructor(private _orderService: OrderService,
              private _userService: UserService) { }

  ngOnInit(): void {
    this.getCurrentUser();
  }

  private getUsersOrder(currentUser) {
    this._orderService.getByCustomerId(currentUser['id']).subscribe(resp =>
    {
      this.orders = resp.content
    })
  }

  getCurrentUser(){
    const token = JSON.parse(localStorage.getItem('currentUser'));
    if (token != null){
      this._userService.getByUsername(token['username']).subscribe(
        data => {
          const currentUser = data
          this.getUsersOrder(currentUser);
        }
      );
    }
  }
}

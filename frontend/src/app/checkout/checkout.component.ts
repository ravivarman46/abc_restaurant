import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  cart: any[] = [];
  total: number = 0;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as { cart: any[], total: number };

    // Initialize cart and total from the passed state
    this.cart = state?.cart || [];
    this.total = state?.total || 0;
  }

  ngOnInit(): void {}

  // Add more checkout logic if needed
}

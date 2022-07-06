import { Direction } from '@angular/cdk/bidi';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  direction: Direction = "ltr";
  constructor() { }

  ngOnInit(): void {
  }

}

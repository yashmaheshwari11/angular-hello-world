import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Customer } from './customer';



@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})

export class CustomerComponent implements OnInit {

  customer: Customer
  format: string
  toggle: boolean

  @Output()
  customerEmitter=new EventEmitter<Customer>()

  constructor() {
    this.customer=new Customer()
    this.toggle=false
   }

  ngOnInit() {
    
  }

   changeDateFormat(){
     this.toggle=!this.toggle
     this.format=this.toggle?'mediumDate':'fullDate'
   }

  add()
  {
    this.customerEmitter.emit(this.customer)
  }
}

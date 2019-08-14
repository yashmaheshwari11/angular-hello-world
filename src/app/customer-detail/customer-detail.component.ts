import { Component, OnInit, Input } from '@angular/core';
import { Customer } from '../customer/customer';

@Component({
  selector: 'app-customer-detail',
  template: `
    <h2> Name of customer is {{customer.name}}</h2>
    <h3> {{customer.name}}'s Birthday is on {{customer.birthDate| date:'longDate'}}</h3>
  `,
  styles: ['h2 {color:blue},h3{color:magenta}'] 
  /* styleUrls: ['./customer-detail.component.css'] */
})
export class CustomerDetailComponent implements OnInit {

  @Input()
  customer: Customer

  constructor() { }

  ngOnInit() {
  }

}

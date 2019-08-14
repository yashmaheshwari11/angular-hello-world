import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer/customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers: Customer[]=[
    {
    name: "Kunal Kamra",
    birthDate: new Date (1980,10,6)
    },
    
    {
    name: "Zakir Khan",
    birthDate: new Date (1975,13,7)
    },
    {
    name: "Biswa Rath",
    birthDate: new Date (1983,8,5)
    }]

   
  constructor() { }

  ngOnInit() {
    
  }

  addCustomer(customer:Customer)
  {
    let c:Customer=new Customer()
    c.name=customer.name
    c.birthDate=customer.birthDate

    this.customers.push(c);
    
  } 
}

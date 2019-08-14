import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit     //OnInit is a life cycle method
{       

  user: User

    constructor() 
    {
      this.user=new User
    }

    ngOnInit() {
    }

    validate()
    {
    console.log(this.user)
    }

}

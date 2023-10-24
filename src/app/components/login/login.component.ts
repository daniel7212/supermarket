import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private userService: LoginService) {}

  email = '';
  password = '';

  ngOnInit() {
  }

  logear() {
    this.userService.login(this.email, this.password)
    .then(response=>
      {
        console.log(response);
      }
      )
    .catch(error => console.log("error"));
    
  }
}

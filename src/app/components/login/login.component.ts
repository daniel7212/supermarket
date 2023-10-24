import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
import Swal from 'sweetalert2';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private userService: LoginService, private router:Router) {}

  resultado!: string;

  formularioContacto = new FormGroup({
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  submit() {
    if (this.formularioContacto.valid)
      this.resultado = "Todos los datos son válidos";
    else
      this.resultado = "Hay datos inválidos en el formulario";
  }

  email = '';
  password = '';

  ngOnInit() {
    
  }

  logear() {
    this.userService.login(this.email, this.password)
    .then(response=>
      {
        console.log(response);
        this.router.navigate(['/personal']);
      }
      )
    .catch(error => this.mensajeError()); 
  }

  mensajeError(){
    Swal.fire({
      title: 'Clave o usuario incorrectos',
      text: 'Revisa tu usuario y contraseña',
      icon: 'error',
      confirmButtonText: 'Ok'
    })
  }


  
}

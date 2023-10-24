import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ProductosComponent } from './productos/productos.component';
import { PersonalComponent } from './personal/personal.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';


@NgModule({
  declarations: [
    LoginComponent,
    ProductosComponent,
    PersonalComponent,
    MenuComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class ComponentsModule { }

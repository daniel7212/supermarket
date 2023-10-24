import { Component, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ProductoService } from '../services/producto.service';
import { IProducto } from '../models/Producto';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent {
  
  producto: IProducto = {
    nombre:"",
    descripcion:"",
    precio:"",
    urlImagen:"",
  };
  
  productoUpdate: IProducto ={
    
    urlImagen:"",
    nombre:"",
    descripcion:"",
    precio:"",
  };


  productos: IProducto[] = [];

  ngOnInit() {

  this.getAll();

  }

  modalRef?: BsModalRef;
  constructor(
    private firebase: ProductoService,
    private modalService: BsModalService
  ) {}

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  openModalUpdate(template: TemplateRef<any>,producto:IProducto) {
    this.modalRef = this.modalService.show(template);
    this.productoUpdate=producto;
    console.log(this.productoUpdate);
  }

  addProducto() {
    this.firebase.addProducto(this.producto);
    this.modalRef?.hide();
  }

  getAll() {
    
    this.firebase.getAll().subscribe((result) => {
      console.log("data:", result);
      this.productos=result;
      console.log("productos", this.productos);
    });
  }

  updateProducto(){
    this.firebase.updateProducto(this.productoUpdate);
    this.modalRef?.hide();
  }

  deleteProducto(producto:IProducto){
    this.firebase.deleteProducto(producto);
  }
}

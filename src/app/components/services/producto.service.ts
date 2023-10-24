import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  addDoc,
  collectionData,
  doc,
  updateDoc,
} from '@angular/fire/firestore';
import { IProducto } from '../models/Producto';
import { Observable, from } from 'rxjs';
import { deleteDoc, query } from 'firebase/firestore';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  constructor(private firestore: Firestore) {}

  addProducto(producto: IProducto) {
    const colRef = collection(this.firestore, 'producto');
    addDoc(colRef, producto)
      .then(() => {
        console.log('success');
      })
      .catch((err) => {
        console.log(err);
      });
  }


  getAll() {
    return collectionData(collection(this.firestore, 'producto'), {
      idField: 'id',
    }) as Observable<IProducto[]>;
  }

  updateProducto(producto:IProducto){
    const docRef = doc(this.firestore, `producto/${producto.id}`);
    
    const updateData = {
      nombre: producto.nombre,
      descripcion: producto.descripcion,
      precio: producto.precio,
      urlImagen:producto.urlImagen,
    }
    
    updateDoc(docRef, updateData).then(()=>
    {
      console.log("Data update");
    }).catch((err) => {
      console.log(err);
    });
    
  }

  deleteProducto(producto:IProducto){
    const docRef = doc(this.firestore, `producto/${producto.id}`);
    return deleteDoc(docRef);
  }

}

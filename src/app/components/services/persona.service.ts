import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  addDoc,
  collectionData,
  doc,
  updateDoc,
  getDocs,
  QuerySnapshot,
  DocumentData,
} from '@angular/fire/firestore';
import { IPersona } from '../models/Persona';
import { Observable, from } from 'rxjs';
import { deleteDoc, query } from 'firebase/firestore';

@Injectable({
  providedIn: 'root',
})
export class PersonaService {
  constructor(private firestore: Firestore) {}

  addPersona(persona: IPersona) {
    const colRef = collection(this.firestore, 'persona');
    addDoc(colRef, persona)
      .then(() => {
        console.log('success');
      })
      .catch((err) => {
        console.log(err);
      });
  }


  getAll() {
    return collectionData(collection(this.firestore, 'persona'), {
      idField: 'id',
    }) as Observable<IPersona[]>;
  }

  updatePersona(persona:IPersona){
    const docRef = doc(this.firestore, `persona/${persona.id}`);
    const updateData = {
      nombres: persona.nombres,
      apellidos: persona.apellidos,
      correo: persona.correo,
      cargo: persona.cargo,
      urlImagen:persona.urlImagen,
    }
    updateDoc(docRef, updateData).then(()=>
    {
      console.log("Data update");
    }).catch((err) => {
      console.log(err);
    });
  }

  deletePersona(persona:IPersona){
    const docRef = doc(this.firestore, `persona/${persona.id}`);
    return deleteDoc(docRef);
  }

}

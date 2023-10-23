import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  addDoc,
  collectionData,
  getDocs,
  QuerySnapshot,
  DocumentData,
} from '@angular/fire/firestore';
import { IPersona } from '../models/Persona';
import { Observable, from } from 'rxjs';
import { query } from 'firebase/firestore';

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

}

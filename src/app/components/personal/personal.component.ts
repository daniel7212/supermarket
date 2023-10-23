import { Component, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { PersonaService } from '../services/persona.service';
import { IPersona } from '../models/Persona';
import { DocumentData } from 'firebase/firestore';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss'],
})
export class PersonalComponent {
  personas: IPersona[] = [];
  a: DocumentData[] = [];

  ngOnInit() {

    this.firebase.getAll().subscribe((result) => {
      console.log(result);
      });
    ;
  }

  persona: IPersona = {
    nombres: '',
    apellidos: '',
    correo: '',
    cargo: '',
    urlImagen: '',
  };

  modalRef?: BsModalRef;
  constructor(
    private firebase: PersonaService,
    private modalService: BsModalService
  ) {}

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  addPersonal() {
    this.firebase.addPersona(this.persona);
  }
}

import { Component, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { PersonaService } from '../services/persona.service';
import { IPersona } from '../models/Persona';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss'],
})
export class PersonalComponent {
  
  persona: IPersona = {
    nombres: '',
    apellidos: '',
    correo: '',
    cargo: '',
    urlImagen: '',
  };

  personaUpdate: IPersona ={
    nombres: '',
    apellidos: '',
    correo: '',
    cargo: '',
    urlImagen: '',
  };


  personas: IPersona[] = [];

  ngOnInit() {

  this.getAll();

  }

  modalRef?: BsModalRef;
  constructor(
    private firebase: PersonaService,
    private modalService: BsModalService
  ) {}

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  openModalUpdate(template: TemplateRef<any>,persona:IPersona) {
    this.modalRef = this.modalService.show(template);
    this.personaUpdate=persona;
  }

  addPersonal() {
    this.firebase.addPersona(this.persona);
    this.modalRef?.hide();
  }

  getAll() {
    this.firebase.getAll().subscribe((result) => {
      console.log("data:", result);
      this.personas=result;
    });
  }

  updatePersona(){
    this.firebase.updatePersona(this.personaUpdate);
    this.modalRef?.hide();
  }

  deletePersona(persona:IPersona){
    this.firebase.deletePersona(persona);
  }
}

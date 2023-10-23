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

    /*
    this.firebase.getPersonal().subscribe((result) => {
      result.forEach((doc) => {
        this.a.push(doc.data());
      });
    });
    //console.log(this.a);
    this.a.forEach(element => {
      console.log("a"+element);
    });
    
    /*
    let persona : IPersona =[
      this.persona.nombres="",
      this.persona.apellidos="",
      this.persona.correo="",
      this.persona.cargo="",
      this.persona.urlImagen="",
    ];
    this.persona.nombres=this.a[0]["nombre"];
    */
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

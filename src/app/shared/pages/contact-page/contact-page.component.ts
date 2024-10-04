import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styles: ``
})

export class ContactPageComponent {
  contact = {
    name: '',
    email: '',
    message: ''
  };

  onSubmit() {
    console.log('Formulario enviado:', this.contact);
    // Aquí se puede agregar la lógica para enviar el formulario.
    // Por ejemplo, enviar los datos a una API o mostrar un mensaje de éxito.
    this.contact = { name: '', email: '', message: '' };
  }
}
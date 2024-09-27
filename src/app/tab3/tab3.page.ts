import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FirebaseService } from '../services/firebase.service';
import { UsersI } from '../users/user';
import { IonicModule } from '@ionic/angular'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [FormsModule, IonicModule, CommonModule] 
})
export class Tab3Page {
  nombre: string = '';
  correo: string = '';
  contrasena: string = '';

  constructor(private firebaseService: FirebaseService) {}

  // Método para tregistrar un usuario nuevo
  registerUser() {
    const newUser: UsersI = {
      Nombre: this.nombre,
      Correo: this.correo,
      Contrasena: this.contrasena,
    };

    this.firebaseService.addUserToCollection('Usuarios', newUser).then(() => {
      console.log('Usuario registrado exitosamente');
      this.nombre = '';
      this.correo = '';
      this.contrasena = '';
    }).catch(error => {
      console.error('Error al registrar usuario: ', error);
    });
  }
}

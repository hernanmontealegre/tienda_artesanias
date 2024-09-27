import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FirebaseService } from '../services/firebase.service';
import { Router } from '@angular/router';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class Tab2Page {
  email: string = '';  
  password: string = '';  

  constructor(private auth: Auth, private router: Router) {}

  login() {
    console.log('Intentando iniciar sesión con:', this.email);  // Log del email=> registra mensaje
    signInWithEmailAndPassword(this.auth, this.email, this.password)
      .then(() => {
        console.log('Login successful');  // =>no registra mensaje
        this.router.navigate(['/tab1']);  // 
      })
      .catch((error) => {
        console.error('Error during login:', error);  // Log de error =>  registra mensaje
        
      });
  }
}

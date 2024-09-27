import { inject, Injectable } from '@angular/core';
import { Firestore, collectionData, collection, addDoc } from '@angular/fire/firestore';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth'; 
import { Observable } from 'rxjs';
import { ProductsList } from '../products/products';
import { UsersI } from '../users/user';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  private firestore: Firestore = inject(Firestore);
  private auth: Auth = inject(Auth); // Inyecta el servicio para la de autenticación

  constructor() {}

  // PAra obtener la lista de productos
  getProductsList(path: string): Observable<ProductsList[]> {
    const itemCollection = collection(this.firestore, path);
    return collectionData(itemCollection, { idField: 'id' }) as Observable<ProductsList[]>;
  }

  // Agrega el nuevo usuario a la colección
  addUserToCollection(path: string, user: UsersI) {
    const userCollection = collection(this.firestore, path);
    return addDoc(userCollection, user);
  }

  // Método para iniciar sesión
  login(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }
}

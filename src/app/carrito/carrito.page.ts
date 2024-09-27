import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ProductsList } from '../products/products';
import { IonicModule } from '@ionic/angular'; 
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-carrito',
  templateUrl: 'carrito.page.html',
  styleUrls: ['carrito.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule], 
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // CUSTOM_ELEMENTS_SCHEMA sprueba solución para personalizar componentes
})
export class CarritoPage {
  cartItems: ProductsList[] = []; // Init. array vacío

  constructor() {
    this.loadCart(); // Carga los productos al iniciar
  }

  loadCart() {
    const cart = localStorage.getItem('cart'); // PAra recuperar los productos del localStorage
    if (cart) {
      this.cartItems = JSON.parse(cart); // convierte el JSON a un array de objetos
    }
  }
}

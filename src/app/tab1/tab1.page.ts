import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FirebaseService } from '../services/firebase.service';
import { ProductsList } from '../products/products';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class Tab1Page implements OnInit {
  products: ProductsList[] = [];

  constructor(private firebaseService: FirebaseService, private router: Router) {}

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.firebaseService.getProductsList('Productos').subscribe(data => {
      this.products = data;
    });
  }

  goToCart() {
    const selectedProducts = this.products.filter(p => p.agregado); //=>Este me ayuda a solo  productos seleccionados
    console.log("Productos seleccionados para el carrito:", selectedProducts); // ok al seleccionar
    localStorage.setItem('cart', JSON.stringify(selectedProducts)); //=> para poder gusardar en localStorage
    this.router.navigate(['/carrito']); //=> direcciona al carrito
  }
  

  onCheckboxChange(product: ProductsList) {
    
    if (typeof product.agregado === 'undefined') {
      product.agregado = false;
    }
    product.agregado = !product.agregado;
  }
}

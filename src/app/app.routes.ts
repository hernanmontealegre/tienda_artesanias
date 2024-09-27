import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'carrito',
    loadComponent: () => import('./carrito/carrito.page').then(m => m.CarritoPage), // Ruta para la página del carrito
  },
];

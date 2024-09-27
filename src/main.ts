import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';
import { } from '@angular/fire/auth';
import { } from '@angular/fire/database';


import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)), provideFirebaseApp(() => initializeApp({"projectId":"tienda-artesanias","appId":"1:481470097446:web:5fb9d762c49e20d98bdee7","storageBucket":"tienda-artesanias.appspot.com","apiKey":"AIzaSyCKbD7gcNcuINc0GnqmuE2XYNgYfAl0uus","authDomain":"tienda-artesanias.firebaseapp.com","messagingSenderId":"481470097446"})), 
    provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideStorage(() => getStorage()),
    
  ],
});

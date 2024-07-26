import { Routes } from '@angular/router';
import { ProductosComponent } from './productos/productos.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'productos',
        component: ProductosComponent,
    },
];

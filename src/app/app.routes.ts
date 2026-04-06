import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { Products } from './pages/products/products';

export const routes: Routes = [
    {
        path: '',
        component: Dashboard
    },
    {
        path: 'products',
        component: Products
    }
];

import { Routes } from '@angular/router';
// import { Books } from './components/books/books';
// import { Laptop } from './components/laptop/laptop';
import { Fruit } from './components/fruit/fruit';
// import { Mobile } from './components/mobile/mobile';
// import { Clothes } from './components/clothes/clothes';

export const routes: Routes = [
//   { path: 'books', component: Books },
//   { path: 'laptop', component: Laptop },
  { path: 'fruits', component: Fruit },
//   { path: 'mobile', component: Mobile },
//   { path: 'clothes', component: Clothes },
  { path: '', redirectTo: 'fruits', pathMatch: 'full' }
];
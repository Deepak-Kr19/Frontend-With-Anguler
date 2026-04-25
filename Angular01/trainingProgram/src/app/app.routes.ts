import { Routes } from '@angular/router';
import { AddTraining } from './components/add-training/add-training';
import { ViewTraining } from './components/view-training/view-training';

export const routes: Routes = [
    { path: '', redirectTo: 'view', pathMatch: 'full'},
    { path: 'add', component: AddTraining},
    { path: 'view', component: ViewTraining}

];

import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Visita } from './visita/visita';
import { Acontecendo } from './acontecendo/acontecendo';
import { Sobre } from './sobre/sobre';

export const routes: Routes = [
    { path: 'home', component: Home },
    { path: 'visita', component: Visita },
    { path: 'acontecendo', component: Acontecendo },
    { path: 'sobre', component: Sobre }
];
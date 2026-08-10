import { Routes } from '@angular/router';
import { Visita } from './visita/visita';
import { Acontecendo } from './acontecendo/acontecendo';
import { Sobre } from './sobre/sobre';
import { Ingressos } from './ingressos/ingressos';

export const routes: Routes = [
    { path: 'visita', component: Visita },
    { path: 'acontecendo', component: Acontecendo },
    { path: 'sobre', component: Sobre },
    { path: 'ingressos', component: Ingressos }
];
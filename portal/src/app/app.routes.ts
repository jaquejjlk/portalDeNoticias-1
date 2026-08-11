import { Routes } from '@angular/router';
import { Visita } from './visita/visita';
import { Acontecendo } from './acontecendo/acontecendo';
import { Sobre } from './sobre/sobre';
import { Ingressos } from './ingressos/ingressos';
import { PaginaQueen } from './pagina-queen/pagina-queen';
import { PaginaModa } from './pagina-moda/pagina-moda';
import { PaginaMangas } from './pagina-mangas/pagina-mangas';

export const routes: Routes = [
    { path: 'visita', component: Visita },
    { path: 'acontecendo', component: Acontecendo },
    { path: 'sobre', component: Sobre },
    { path: 'ingressos', component: Ingressos },
    { path: 'pagina-queen', component: PaginaQueen },
    { path: 'pagina-moda', component: PaginaModa },
    { path: 'pagina-mangas', component: PaginaMangas }
];
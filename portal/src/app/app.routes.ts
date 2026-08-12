import { Routes } from '@angular/router';
import { Visita } from './visita/visita';
import { Acontecendo } from './acontecendo/acontecendo';
import { PaginaQueen } from './pagina-queen/pagina-queen';
import { PaginaModa } from './pagina-moda/pagina-moda';
import { PaginaMangas } from './pagina-mangas/pagina-mangas';
import { Sobre } from './sobre/sobre';
import { Ingressos } from './ingressos/ingressos';
import { Login } from './login/login';
import { Cadastro } from './cadastro/cadastro';


export const routes: Routes = [
    { path: 'visita', component: Visita },
    { path: 'login', component: Login },
    { path: 'cadastro', component: Cadastro },
    { path: 'acontecendo', component: Acontecendo },
    { path: 'pagina-queen', component: PaginaQueen },
    { path: 'pagina-moda', component: PaginaModa },
    { path: 'pagina-mangas', component: PaginaMangas },
    { path: 'sobre', component: Sobre },
    { path: 'ingressos', component: Ingressos }
 
];
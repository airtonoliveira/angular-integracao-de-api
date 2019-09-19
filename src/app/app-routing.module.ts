import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { UsuarioModule } from './usuario/usuario.module';


const routes: Routes = [
  //Trechos comentados pois agora quem carrega os componentes são os módulos
  //{ path: 'home', component: HomeComponent },
  //{ path: 'usuario', component: UsuarioComponent },
  //Carregamento por módulos:
  { 
    path: 'home', 
    loadChildren: './home/home.module#HomeModule' 
  },
  { 
    path: 'usuario', 
    loadChildren: './usuario/usuario.module#UsuarioModule' 
  },
  { 
    path: '', 
    pathMatch:'full', 
    redirectTo:'/home' 
  },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, {useHash:true})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

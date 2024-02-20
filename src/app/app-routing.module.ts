import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { SobremiComponent } from './componentes/sobremi/sobremi.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'proyectos', component: ProyectosComponent},
  {path: 'habilidades', component: HabilidadesComponent},
  {path: 'sobremi', component: SobremiComponent},
  {path: 'contacto', component: ContactoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

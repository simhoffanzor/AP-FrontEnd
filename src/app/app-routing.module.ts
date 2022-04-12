import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { SobreMiComponent } from './componentes/sobre-mi/sobre-mi.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { FormacionComponent } from './componentes/formacion/formacion.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { LoginComponent } from './componentes/header/login/login.component';

const routes: Routes = [
  { path: '', component:InicioComponent },
  { path: 'inicio', component:InicioComponent },
  { path: 'experiencia', component:ExperienciaComponent },
  { path: 'sobre-mi', component:SobreMiComponent},
  { path: 'proyectos', component:ProyectosComponent},
  { path: 'formacion', component:FormacionComponent},
  { path: 'skills', component:SkillsComponent },
  { path: 'login', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing:true })],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }

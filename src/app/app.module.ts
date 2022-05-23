import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { SobreMiComponent } from './componentes/sobre-mi/sobre-mi.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { FormacionComponent } from './componentes/formacion/formacion.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { ExperienciaItemComponent } from './componentes/experiencia-item/experiencia-item.component';
import { FormacionItemComponent } from './componentes/formacion-item/formacion-item.component';
import { SobreMiItemsComponent } from './componentes/sobre-mi-items/sobre-mi-items.component';
import { ProyectosItemComponent } from './componentes/proyectos-item/proyectos-item.component';
import { SkillsItemComponent } from './componentes/skills-item/skills-item.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalAgregarExpComponent } from './componentes/modales/modal-agregar-exp/modal-agregar-exp.component';
import { ModalAgregarForComponent } from './componentes/modales/modal-agregar-for/modal-agregar-for.component';
import { ModalAgregarProyComponent } from './componentes/modales/modal-agregar-proy/modal-agregar-proy.component';
import { ModalAgregarSkillComponent } from './componentes/modales/modal-agregar-skill/modal-agregar-skill.component';
import { ModalEditarExpComponent } from './componentes/modales/modal-editar-exp/modal-editar-exp.component';
import { ModalEditarForComponent } from './componentes/modales/modal-editar-for/modal-editar-for.component';
import { ModalEditarProyComponent } from './componentes/modales/modal-editar-proy/modal-editar-proy.component';
import { ModalEditarSkillComponent } from './componentes/modales/modal-editar-skill/modal-editar-skill.component';
import { ModalEditarUsuComponent } from './componentes/modales/modal-editar-usu/modal-editar-usu.component';
import { ModalLoginComponent } from './componentes/modales/modal-login/modal-login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ExperienciaComponent,
    InicioComponent,
    SobreMiComponent,
    ProyectosComponent,
    FormacionComponent,
    SkillsComponent,
    ExperienciaItemComponent,
    FormacionItemComponent,
    SobreMiItemsComponent,
    ProyectosItemComponent,
    SkillsItemComponent,
    ModalAgregarExpComponent,
    ModalAgregarForComponent,
    ModalAgregarProyComponent,
    ModalAgregarSkillComponent,
    ModalEditarExpComponent,
    ModalEditarForComponent,
    ModalEditarProyComponent,
    ModalEditarSkillComponent,
    ModalEditarUsuComponent,
    ModalLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

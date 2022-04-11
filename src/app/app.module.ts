import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsModule } from '@angular/forms';

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
import { ButtonComponent } from './componentes/header/button/button.component';
import { ExperienciaItemComponent } from './componentes/experiencia-item/experiencia-item.component';
import { FormacionItemComponent } from './componentes/formacion-item/formacion-item.component';
import { SobreMiItemsComponent } from './componentes/sobre-mi-items/sobre-mi-items.component';
import { ProyectosItemComponent } from './componentes/proyectos-item/proyectos-item.component';
import { SkillsItemComponent } from './componentes/skills-item/skills-item.component';
import { FormButtonComponent } from './componentes/formacion/form-button/form-button.component';
import { ProyButtonComponent } from './componentes/proyectos/proy-button/proy-button.component';
import { SkillButtonComponent } from './componentes/skills/skill-button/skill-button.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalAgregarExpComponent } from './componentes/modal-agregar-exp/modal-agregar-exp.component';

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
    ButtonComponent,
    ExperienciaItemComponent,
    FormacionItemComponent,
    SobreMiItemsComponent,
    ProyectosItemComponent,
    SkillsItemComponent,
    FormButtonComponent,
    ProyButtonComponent,
    SkillButtonComponent,
    ModalAgregarExpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    NgbModule,
    FormsModule
  ],
  exports: [
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

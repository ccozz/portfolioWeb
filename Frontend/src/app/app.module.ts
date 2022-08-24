import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { EducacionComponent } from './educacion/educacion.component';
import { SkillsComponent } from './skills/skills.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    AcercaDeComponent,
    LoginComponent,
    HeaderComponent,
    NavbarComponent,
    ExperienciaComponent,
    PortfolioComponent,
    EducacionComponent,
    SkillsComponent,
    ProyectosComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

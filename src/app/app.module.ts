import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllTemplateAdminComponent } from './backoffice/all-template-admin/all-template-admin.component';
import { FooterAdminComponent } from './backoffice/footer-admin/footer-admin.component';
import { BodyAdminComponent } from './backoffice/body-admin/body-admin.component';
import { SidebarAdminComponent } from './backoffice/sidebar-admin/sidebar-admin.component';
import { HeaderAdminComponent } from './backoffice/header-admin/header-admin.component';
import { BodyUserComponent } from './frontoffice/body-user/body-user.component';
import { HeaderUserComponent } from './frontoffice/header-user/header-user.component';
import { FooterUserComponent } from './frontoffice/footer-user/footer-user.component';
import { AllTemplateUserComponent } from './frontoffice/all-template-user/all-template-user.component';
import { AfficherMesAnnoncesComponent } from './backoffice/afficher-mes-annonces/afficher-mes-annonces.component';
import { AjouterAnnoncesComponent } from './backoffice/ajouter-annonces/ajouter-annonces.component';
import { ModifierAnnoncesComponent } from './backoffice/modifier-annonces/modifier-annonces.component';
import { SupprimerAnnoncesComponent } from './backoffice/supprimer-annonces/supprimer-annonces.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { AfficherbienImmobiliereComponent } from './backoffice/afficherbien-immobiliere/afficherbien-immobiliere.component';
import { AjouterbienImmobiliereComponent } from './backoffice/ajouterbien-immobiliere/ajouterbien-immobiliere.component';
import { SupprimerbienImmobiliereComponent } from './backoffice/supprimerbien-immobiliere/supprimerbien-immobiliere.component';
import { ModifierbienImmobiliereComponent } from './backoffice/modifierbien-immobiliere/modifierbien-immobiliere.component';
import { AfficherPromotionComponent } from './backoffice/afficher-promotion/afficher-promotion.component';
import { AjouterPromotionComponent } from './backoffice/ajouter-promotion/ajouter-promotion.component';
import { SupprimerPromotionComponent } from './backoffice/supprimer-promotion/supprimer-promotion.component';


@NgModule({
  declarations: [
    AppComponent,
    AllTemplateAdminComponent,
    FooterAdminComponent,
    BodyAdminComponent,
    SidebarAdminComponent,
    HeaderAdminComponent,
    BodyUserComponent,
    HeaderUserComponent,
    FooterUserComponent,
    AllTemplateUserComponent,
    AfficherMesAnnoncesComponent,
    AjouterAnnoncesComponent,
    ModifierAnnoncesComponent,
    SupprimerAnnoncesComponent,
    AfficherbienImmobiliereComponent,
    AjouterbienImmobiliereComponent,
    SupprimerbienImmobiliereComponent,
    ModifierbienImmobiliereComponent,
    AfficherPromotionComponent,
    AjouterPromotionComponent,
    SupprimerPromotionComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

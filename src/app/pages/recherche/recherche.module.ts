import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AutoCompleteModule } from 'ionic4-auto-complete';
import { IonicModule } from '@ionic/angular';

import { RecherchePageRoutingModule } from './recherche-routing.module';

import { RecherchePage } from './recherche.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AutoCompleteModule,
    RecherchePageRoutingModule
  ],
  declarations: [RecherchePage]
})
export class RecherchePageModule {}

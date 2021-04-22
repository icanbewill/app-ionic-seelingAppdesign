import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LovedPageRoutingModule } from './loved-routing.module';

import { LovedPage } from './loved.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LovedPageRoutingModule
  ],
  declarations: [LovedPage]
})
export class LovedPageModule {}

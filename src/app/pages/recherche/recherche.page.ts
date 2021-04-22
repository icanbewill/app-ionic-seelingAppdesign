import { FilterPage } from './../product/filter/filter.page';
import { Component, OnInit } from '@angular/core';
import {AutoCompleteService} from 'ionic4-auto-complete';
import { PopoverController, NavController, ModalController } from '@ionic/angular';
import { DataServicesService } from 'src/app/services/data/data-services.service';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.page.html',
  styleUrls: ['./recherche.page.scss'],
})
export class RecherchePage implements OnInit {

  constructor(public popoverCtrl: PopoverController, public dataService: DataServicesService, 
    public navCtrl: NavController, public modalCtrl:ModalController) { }

  ngOnInit() {
  }

  async openPopover(ev){
    const popover = await this.popoverCtrl.create({
      component : FilterPage,
      cssClass : 'filter',
      animated:true,
      mode: 'ios',
      event: ev,
      translucent:true
    });

    return await popover.present();
  }

}

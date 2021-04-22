import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  rechercher(){
    this.route.navigate(['tabs/recherche']);
  }

  details(){
    this.route.navigate(['tabs/details-products']);
  }
}

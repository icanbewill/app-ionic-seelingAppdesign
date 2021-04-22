import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-products',
  templateUrl: './details-products.page.html',
  styleUrls: ['./details-products.page.scss'],
})
export class DetailsProductsPage implements OnInit {

  private details;any;

  constructor() { }

  ngOnInit() {
    this.details = {
      name : "Nom du produit",
      addedBy : "AkimbiWil",
      price : 5000,
      devise : "XOF",
      ma : "En boutique",
      addedAt : "22-05-2020",
      state : "1 / 10",
      stars : "4.5",
      images : [
        "assets/images/slide.jpg",
        "assets/images/slide.jpg",
        "assets/images/slide.jpg"
      ],
    }

    console.log(this.details);
  }

}

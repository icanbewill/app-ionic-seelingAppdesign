import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.page.html',
  styleUrls: ['./add-product.page.scss'],
})
export class AddProductPage implements OnInit {

  imageURI:any[]  = [];
  imageFileName:any[];
  lastImage:any;
  produit : any[]  = [];
  imageadd:boolean  = false;
  categories = [];
  cities = [];
  datauser = [];

  nomimg:string='';
  myphoto:any;


  constructor(private route: ActivatedRoute, public router: Router) { }

  ngOnInit() {
   
  }


  onChange(selectedValue){
    console.log("Selected:",selectedValue);
  }
}

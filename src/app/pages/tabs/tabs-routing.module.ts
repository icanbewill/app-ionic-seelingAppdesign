import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'accueil',
        loadChildren: () => import('../accueil/accueil.module').then(m => m.AccueilPageModule)
      },
      {
        path: 'details-products',
        loadChildren: () => import('../details-products/details-products.module').then( m => m.DetailsProductsPageModule)
      },
      {
        path: 'recherche',
        loadChildren: () => import('../recherche/recherche.module').then( m => m.RecherchePageModule)
      },
      {
        path: 'account',
        loadChildren: () => import('../account/account.module').then( m => m.AccountPageModule)
      },
      {
        path: 'messages',
        loadChildren: () => import('../messages/messages.module').then( m => m.MessagesPageModule)
      },
      {
        path: 'loved',
        loadChildren: () => import('../loved/loved.module').then( m => m.LovedPageModule)
      },
      {
        path: 'add-product',
        loadChildren: () => import('../product/add-product/add-product.module').then( m => m.AddProductPageModule)
      },
      {
        path: 'edit-product',
        loadChildren: () => import('../product/edit-product/edit-product.module').then( m => m.EditProductPageModule)
      },
    ]
  },
  {
    path:'tabs',
    redirectTo: '/tabs/accueil',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}

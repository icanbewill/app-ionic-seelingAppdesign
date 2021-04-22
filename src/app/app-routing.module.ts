import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tabs/accueil',
    pathMatch: 'full'
  },
  // {
  //   path: 'folder/:id',
  //   loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  // },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./pages/cart/cart.module').then( m => m.CartPageModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./pages/account/account.module').then( m => m.AccountPageModule)
  },
  {
    path: 'messages',
    loadChildren: () => import('./pages/messages/messages.module').then( m => m.MessagesPageModule)
  },
  {
    path: 'loved',
    loadChildren: () => import('./pages/loved/loved.module').then( m => m.LovedPageModule)
  },
  {
    path: 'add-product',
    loadChildren: () => import('./pages/product/add-product/add-product.module').then( m => m.AddProductPageModule)
  },
  {
    path: 'edit-product',
    loadChildren: () => import('./pages/product/edit-product/edit-product.module').then( m => m.EditProductPageModule)
  },
  {
    path: 'filter',
    loadChildren: () => import('./pages/product/filter/filter.module').then( m => m.FilterPageModule)
  },
  // {
  //   path: 'accueil',
  //   loadChildren: () => import('./pages/accueil/accueil.module').then( m => m.AccueilPageModule)
  // },
  // {
  //   path: 'recherche',
  //   loadChildren: () => import('./pages/recherche/recherche.module').then( m => m.RecherchePageModule)
  // },
  // {
  //   path: 'details-products',
  //   loadChildren: () => import('./pages/details-products/details-products.module').then( m => m.DetailsProductsPageModule)
  // }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

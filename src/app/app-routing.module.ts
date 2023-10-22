import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './shared/pages/about/about.component';
import { ContactComponent } from './shared/pages/contact/contact.component';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';

const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'countries',
    loadChildren: () => import('./countries/countries.module').then(m => m.CountriesModule)
  },
  {
    path:'**',
    redirectTo:'countries'
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot( routes )
  ],
  declarations: [],
  exports: [
    RouterModule
  ],
  providers: [],
})
export class  AppRoutingModule {}

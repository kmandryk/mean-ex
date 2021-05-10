import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BeerComponent } from './beer/beer.component';
import { BeerDetailComponent } from './beer-detail/beer-detail.component';
import { BeerCreateComponent } from './beer-create/beer-create.component';
import { BeerEditComponent } from './beer-edit/beer-edit.component';


const appRoutes: Routes = [
  {
    path: 'beers',
    component: BeerComponent,
    data: { title: 'Beer List' }
  },
  {
    path: 'beer-details/:id',
    component: BeerDetailComponent,
    data: { title: 'Beer Details' }
  },
  {
    path: 'beer-create',
    component: BeerCreateComponent,
    data: { title: 'Create Beer' }
  },
  {
    path: 'beer-edit/:id',
    component: BeerEditComponent,
    data: { title: 'Edit Beer' }
  },
  { path: '',
    redirectTo: '/beers',
    pathMatch: 'full'
  }
];
@NgModule({
  declarations: [
    AppComponent,
    BeerComponent,
    BeerDetailComponent,
    BeerCreateComponent,
    BeerEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

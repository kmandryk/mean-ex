import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerCreateComponent } from '.././beer-create/beer-create.component';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AppComponent } from '.././app.component';
import { BeerComponent } from '.././beer/beer.component';
import { BeerDetailComponent } from '.././beer-detail/beer-detail.component';
import { BeerEditComponent } from '.././beer-edit/beer-edit.component';


import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
describe('BeerDetailComponent', () => {
  let component: BeerDetailComponent;
  let fixture: ComponentFixture<BeerDetailComponent>;

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
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent,BeerCreateComponent, BeerComponent,BeerEditComponent,BeerDetailComponent ],
      imports: [
        BrowserModule,
        FormsModule,
        HttpClientTestingModule,
        RouterModule.forRoot(
          appRoutes,
          { enableTracing: true } // <-- debugging purposes only
        )
      ],
      providers: [ {provide: APP_BASE_HREF, useValue: '/'}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

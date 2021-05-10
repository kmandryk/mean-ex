import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerCreateComponent } from './beer-create.component';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AppComponent } from '.././app.component';
import { BeerComponent } from '.././beer/beer.component';
import { BeerDetailComponent } from '.././beer-detail/beer-detail.component';
import { BeerEditComponent } from '.././beer-edit/beer-edit.component';


import { BrowserModule, By } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { DebugElement } from '@angular/core';



describe('BeerCreateComponent', () => {
  let component: BeerCreateComponent;
  let fixture: ComponentFixture<BeerCreateComponent>;
  let de: DebugElement;
  let el: HTMLElement;

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
    fixture = TestBed.createComponent(BeerCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    de = fixture.debugElement.query(By.css('form'));
    el = de.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form should be valid'), async(() => {
    fixture.debugElement.query(By.css('text'))
  })
});

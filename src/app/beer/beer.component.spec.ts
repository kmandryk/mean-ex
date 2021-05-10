import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerComponent } from './beer.component';

import { BeerCreateComponent } from '.././beer-create/beer-create.component';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AppComponent } from '.././app.component';
import { BeerDetailComponent } from '.././beer-detail/beer-detail.component';
import { BeerEditComponent } from '.././beer-edit/beer-edit.component';


import { BrowserModule, By } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

describe('BeerComponent', () => {
  let component: BeerComponent;
  let fixture: ComponentFixture<BeerComponent>;

  let beers = [{
    _id: 1,
    name: 'Hoyne Pilsner',
    brewery: 'Hoyne',
    type: 'Pilsner',
    style: 'Belgian',
    location: 'Victoria',
    updated_date: '2021-05-09T03:30:53.570Z'
  },
  {
    _id: 2,
    name: 'Electric Unicorn',
    brewery: 'Philips',
    type: 'IPA',
    style: 'West Coast',
    location: 'Victoria',
    updated_date: '2021-05-09T03:30:53.570Z'
  },
  {
    _id: 3,
    name: 'Tiger Shark',
    brewery: 'Philips',
    type: 'IPA',
    style: 'West Coast',
    location: 'Victoria',
    updated_date: '2021-05-09T03:30:53.570Z'
  }
  ];

  let types = ['IPA','Pilsner'];
  let styles = ['West Coast', 'Belgian'];
  let locations = ['Victoria'];

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
  {
    path: '',
    redirectTo: '/beers',
    pathMatch: 'full'
  }
];
beforeEach(async(() => {
  TestBed.configureTestingModule({
    declarations: [AppComponent, BeerCreateComponent, BeerComponent, BeerEditComponent, BeerDetailComponent],
    imports: [
      BrowserModule,
      FormsModule,
      HttpClientTestingModule,
      RouterModule.forRoot(
        appRoutes,
        { enableTracing: true } // <-- debugging purposes only
      )
    ],
    providers: [{ provide: APP_BASE_HREF, useValue: '/' }]
  })
    .compileComponents();
}));

beforeEach(() => {
  fixture = TestBed.createComponent(BeerComponent);
  component = fixture.componentInstance;
  component.beers = beers;
  component.types = types;
  component.styles = styles;
  component.locations = locations;
  fixture.detectChanges();
});

it('should create', () => {
  expect(component).toBeTruthy();
});


it('should render title in a h2 tag', async(() => {
  fixture.detectChanges();
  const compiled = fixture.debugElement.nativeElement;
  expect(compiled.querySelector('h2').textContent).toContain('Beer List');
}));

it('should have a search options', async(() => {
  // fixture.detectChanges();

  fixture.detectChanges();
  const select = fixture.debugElement.query(By.css('types')).nativeElement;
  select.value = select.options[1].value;
  select.dispatchEvent(new Event('change'));
  fixture.detectChanges();

  //table header + rows
  expect(trs.length).toEqual(4);
}));

it('should have a list', async(() => {
  // fixture.detectChanges();

  fixture.detectChanges();
  let trs = fixture.debugElement.nativeElement.querySelectorAll('tr');

  //table header + rows
  expect(trs.length).toEqual(4);
}));
});

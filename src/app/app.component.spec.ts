import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { BeerComponent } from './beer/beer.component';
import { BeerDetailComponent } from './beer-detail/beer-detail.component';
import { BeerCreateComponent } from './beer-create/beer-create.component';
import { BeerEditComponent } from './beer-edit/beer-edit.component';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';



describe('AppComponent', () => {

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
    TestBed.configureTestingModule({declarations: [
      AppComponent,
      BeerComponent,
      BeerDetailComponent,
      BeerCreateComponent,
      BeerEditComponent,
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
    providers: [ {provide: APP_BASE_HREF, useValue: '/'}]
  }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  // it(`should have as title 'app'`, async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('app');
  // }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Craft Bar Brewery');
  }));
});

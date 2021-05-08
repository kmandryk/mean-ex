import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BeerComponent implements OnInit {

  beers: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('/beer').subscribe(data => {
      console.log(data);
      this.beers = data;
    });
  }

}

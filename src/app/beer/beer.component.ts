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
  types: any;
  styles: any;
  locations: any;

  type: string;
  style: string;
  location: string;

  text: string;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('/beer').subscribe(data => {
      console.log(data);
      this.beers = data;
    });
    this.http.get('beer/type').subscribe(data => {
      console.log(data);
      this.types = data;
    });
    this.http.get('beer/style').subscribe(data => {
      console.log(data);
      this.styles = data;
    });
    this.http.get('beer/location').subscribe(data => {
      console.log(data);
      this.locations = data;
    });
  }

  search() {
    this.http.get('/beer?type='+this.type+'&style='+this.style+'&location='+this.location).subscribe(data => {
      console.log(data);
      this.beers = data;
    });
  }


}

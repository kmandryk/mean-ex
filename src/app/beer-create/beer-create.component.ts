import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-beer-create',
  templateUrl: './beer-create.component.html',
  styleUrls: ['./beer-create.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BeerCreateComponent implements OnInit {

  beer = {};

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  saveBeer() {
    this.http.post('/beer', this.beer)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/beer-details', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }

}

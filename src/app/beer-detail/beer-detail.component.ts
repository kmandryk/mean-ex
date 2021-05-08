import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-beer-detail',
  templateUrl: './beer-detail.component.html',
  styleUrls: ['./beer-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BeerDetailComponent implements OnInit {

  beer = {};

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.getBeerDetail(this.route.snapshot.params['id']);
  }

  getBeerDetail(id) {
    this.http.get('/beer/'+id).subscribe(data => {
      this.beer = data;
    });
  }

  deleteBeer(id) {
    this.http.delete('/beer/'+id)
      .subscribe(res => {
          this.router.navigate(['/beers']);
        }, (err) => {
          console.log(err);
        }
      );
  }

}

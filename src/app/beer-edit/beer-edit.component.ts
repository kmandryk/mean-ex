import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-beer-edit',
  templateUrl: './beer-edit.component.html',
  styleUrls: ['./beer-edit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BeerEditComponent implements OnInit {

  beer: any = {};

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getBeer(this.route.snapshot.params['id']);
  }

  getBeer(id) {
    this.http.get('/beer/'+id).subscribe(data => {
      this.beer = data;
    });
  }

  updateBeer(id) {
    this.beer.updated_date = Date.now();
    this.http.put('/beer/'+id, this.beer)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/beer-details', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }

}

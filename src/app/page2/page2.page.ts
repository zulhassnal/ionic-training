import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.page.html',
  styleUrls: ['./page2.page.scss'],
})
export class Page2Page implements OnInit {
  data: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute, 
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      //this.data.regno = params['regno']; 
      this.data = params;
    });
    console.log(this.data);
  }

}

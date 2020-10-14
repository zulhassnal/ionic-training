import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.page.html',
  styleUrls: ['./page1.page.scss'],
})
export class Page1Page implements OnInit {
  data: any;
  constructor(
    public apiservice: ApiService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.apiservice.getList(1).then( results => {
      let response: any = results;
        console.log('response:' + JSON.stringify(response));
        this.data = response;
        //this.router.navigateByUrl('home');
    }, err => {
        console.log('Error' + JSON.stringify(err));
    }); 
  }

  goToPage2(data){
    this.router.navigate(['/page2', data]);
  }



}

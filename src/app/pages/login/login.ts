import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserData } from '../../providers/user-data';

import { UserOptions } from '../../interfaces/user-options';
import { ApiService } from '../../api.service';



@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  styleUrls: ['./login.scss'],
})
export class LoginPage {
  login: UserOptions = { username: '', password: '' };
  submitted = false;

  constructor(
    public userData: UserData,
    public router: Router,
    public apiservice: ApiService,
  ) { }

  onLogin(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      //this.userData.login(this.login.username);
      //this.router.navigateByUrl('/app/tabs/schedule');
    //}

      this.apiservice.login(this.login).then( async results => {
        let response: any = results;
          console.log('response:' + JSON.stringify(response.data.msg));
          if( response.data.msg == "success" ){
            this.userData.login(this.login.username);
            this.router.navigateByUrl('/app/tabs/schedule');
          }else{
            alert('error username/password');
          }
      }, err => {
          //alert('wrong username/password');
          //this.presentToast();
          console.log('Error' + JSON.stringify(err));
      }); 
    }
  }

  onSignup() {
    this.router.navigateByUrl('/signup');
  }

  goToPage2(data){
    data = {};
    this.router.navigate(['/page2', data]);
  }
}

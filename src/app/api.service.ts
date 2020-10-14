import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //url = 'http://localhost:8000/api/';
  //url = 'http://api-ionic.ddns.net/api/';
  url = 'http://api-ionic.kometsoft.net:81/api/';

  constructor(
    private  http : HttpClient
  ) { 
    
  }

  //getList(params: any){
    getListx(){
    const url: string = this.url + 'list';
    //const body: string = JSON.stringify(params);
    const body: string = '';
    // console.log(body);
    return new Promise( (resolve, reject)  => {
      this.http.post(url, body, httpOptions).subscribe(data => {
        resolve(data);
      }, err => {
        reject(err);
      });
    });
  }

  getList(params){
    const url: string = this.url + 'list';
    const body: string = JSON.stringify(params);
    return new Promise((resolve, reject) => {
      this.http.get(url)
      .subscribe(data => {
        //console.log(data);
        resolve(data);
        let datastatus : any = data;
      }, err =>{
        reject(err);
      })
    })
  }

  login(params: any) {
    const url: string = this.url + 'login';
    const body: string = JSON.stringify(params);
    //return console.log(body);
    return new Promise( (resolve, reject)  => {
      this.http.post(url, body, httpOptions).subscribe(data => {
        resolve(data);
        let datauser : any = data;
        console.log('datauser : ' + datauser);
      }, err => {
        reject(err);
      });
    });
  }
}

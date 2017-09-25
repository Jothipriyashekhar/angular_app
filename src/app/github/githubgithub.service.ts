import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
//importing from angular for returning the value from url

@Injectable()
export class GithubgithubService {

  constructor(private http : Http) { }

  /* simply for checking the response from url
     getUser(){
    const searchText = 'js';
    const url ='http://api.github.com/search/users?q=' +searchText;
    this.http.get(url).subscribe(
    res => {
    const data = res.json();
    console.log(data);
    return data;
    }
    )
  } */

  //get the details of one user
  getuserdetails(userId): Observable<any>{
      const url = 'https://api.github.com/users/'+userId;
      return this.http.get(url).map(
        res =>{
          const details = res.json();
          console.log(details);
          return details;
        }
      )
  }


getUser(searchText): Observable<any>{
  //console.log(searchText,"searchText")
  const url ='http://api.github.com/search/users?q=' +searchText;
   console.log(url)
  return this.http.get(url).map(
  res => {
    const data = res.json();
    console.log(data);
    return data;
  }
)
}

}

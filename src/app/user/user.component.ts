import { ActivatedRoute } from '@angular/router';
//routing to activated route
import { Component, OnInit } from '@angular/core';
import { GithubgithubService } from './../github/githubgithub.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [GithubgithubService]
})
export class UserComponent implements OnInit {
  public result;
  constructor(private activateRoute:ActivatedRoute ,private githubgithubService : GithubgithubService) { }

  ngOnInit() {
    //params[routerparamname]
    const userId = this.activateRoute.snapshot.params['userId'];
    console.log(userId);
    this.githubgithubService.getuserdetails(userId).subscribe(
      res =>{
        console.log(res,"resin search par.user");
        this.result = res;

      }
    );
  }

}

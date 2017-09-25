import { Router } from '@angular/router';//routing to all/one github user
import { Component, OnInit } from '@angular/core';
import { GithubgithubService } from './../github/githubgithub.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [GithubgithubService]
})
export class SearchComponent implements OnInit {
  public searchText;//value from input text box
  public searchResult;//storing res from get url
  public searchCount;

  constructor(private router:Router,private githubgithubService : GithubgithubService) { }

  ngOnInit() {

  }
  //routing the particular user
  showuserdetail(item){
   this.router.navigate(['item',item.login]);
  }
  //get the value from input text field
onkeyup(event){
  console.log(event.target.value);
   this.searchText = event.target.value;
}

//passing textboxvalue to backend(have to put subscribe)
onsearch(){
  console.log(this.searchText)
  this.githubgithubService.getUser(this.searchText).subscribe(
    res =>{
      console.log(res,"res in search");
      this.searchResult = res;
      this.searchCount = res.total_count;
    }
  );
}

}

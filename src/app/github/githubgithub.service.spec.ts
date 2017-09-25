import { TestBed, inject } from '@angular/core/testing';

import { GithubgithubService } from './githubgithub.service';

describe('GithubgithubService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GithubgithubService]
    });
  });

  it('should be created', inject([GithubgithubService], (service: GithubgithubService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed } from '@angular/core/testing';

import { ViewAllPostsService } from './view-all-posts.service';

describe('ViewAllPostsService', () => {
  let service: ViewAllPostsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewAllPostsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

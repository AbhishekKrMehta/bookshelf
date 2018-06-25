import { TestBed, inject } from '@angular/core/testing';

import { ConfigService } from './config.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ModelData } from './model-data';

describe('ConfigService', () => {
  let service: ConfigService;
  let httpMock: HttpTestingController;
  const ISBNurl = 'https://developer.nytimes.com/proxy/https/api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key=bde47cea25514ca0a496054906fab92c';


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ConfigService]
    });
    service = TestBed.get(ConfigService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() =>{
    httpMock.verify();
  });

  it('should retrieve data from API via GET', () =>{
    const dummyPost:ModelData[] = [
      {userid: '123', id:1, body:'xyz', title:'testing' },
      {userid: '123', id:1, body:'xyz', title:'testing'}
  ];

  service.getBookDetails(ISBNurl).subscribe( posts =>{
    expect(posts.length).toBe(2);
    expect(posts).toEqual(dummyPost);
  });

  const request = httpMock.expectOne(ISBNurl)
  expect(request.request.method).toBe('GET');
  request.flush(dummyPost);
  });
});

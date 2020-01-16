import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthorService } from './authors.service';

describe('AuthorsService', () => {
  let injector: TestBed;
  let service: AuthorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthorService],
    });

    injector = getTestBed();
    service = injector.get(AuthorService);
  });

  const AUTHORS = [
    { name: 'Author1'},
    { name: 'Author2'},
    { name: 'Author3'},
    { name: 'Author4'}
  ];

  it('getAuthors() should return a list of authors', () => {
    service.getAuthors().then((res) => {
      expect(res).toEqual(AUTHORS);
    });
  });
});

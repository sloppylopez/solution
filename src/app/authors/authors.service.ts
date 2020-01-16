import {Injectable} from '@angular/core';

@Injectable()
export class AuthorService {
  constructor() {
  }
  getAuthors(): Promise<any[]> {
    const AUTHORS = [
      { name: 'Author1'},
      { name: 'Author2'},
      { name: 'Author3'},
      { name: 'Author4'}
    ];

    return Promise.resolve(AUTHORS);
  }
}

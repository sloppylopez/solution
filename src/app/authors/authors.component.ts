import { Component, OnInit } from '@angular/core';
import {AuthorService} from "./authors.service";

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  constructor(private authorService: AuthorService) { }
  authors: any[];
  ngOnInit() {
    this.getAuthors();
  }
  getAuthors() {
    this.authorService.getAuthors().then(authors => this.authors = authors);
  }
}

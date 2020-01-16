import { BrowserModule } from '@angular/platform-browser';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';

import { AppComponent } from './app.component';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorService } from "./authors/authors.service";
@NgModule({
  declarations: [
    AppComponent,
    AuthorsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [AuthorService],
  bootstrap: [AppComponent]
})
export class AppModule { }

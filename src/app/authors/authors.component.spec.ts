import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorsComponent } from './authors.component';
import {NO_ERRORS_SCHEMA} from "@angular/core";
import {AuthorService} from "./authors.service";

describe('AuthorsComponent', () => {
  let component: AuthorsComponent;
  let fixture: ComponentFixture<AuthorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorsComponent],
      providers: [AuthorService]
    })
    .compileComponents();

    TestBed.overrideComponent(AuthorsComponent, {
      set: {
        providers: [
          { provide: AuthorService, useClass: AuthorService }
        ]
      }
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

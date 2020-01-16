import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { AuthorsComponent } from './authors.component';
import {AuthorService} from "./authors.service";

describe('AuthorsComponent', () => {
  let component: AuthorsComponent;
  let authorService: AuthorService;
  let spy: jasmine.Spy;
  let de: DebugElement;
  let el: HTMLElement;
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
    authorService = fixture.debugElement.injector.get(AuthorService);
    const authors = [{ name: 'author1', book: 'book1' }];
    spy = spyOn(authorService, 'getAuthors')
      .and.returnValue(Promise.resolve(authors));

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      de = fixture.debugElement.query(By.css('.list-group-item'));
      el = de.nativeElement;
    });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render author list', () => {
    expect(el.textContent.trim()).toBe('Author1');
  });
});

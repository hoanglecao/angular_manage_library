import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import {  MatFormFieldModule,
          MatInputModule, 
          MatSelectModule,
          MatButtonModule ,
          MatCardModule ,
          MatBadgeModule,
          MatTooltipModule } from '@angular/material';
import {FormGroupDirective} from '@angular/forms';

import { AppComponent } from './app.component';
import { AddBookComponent} from './books/book/add-book.component';
import { BookDetailComponent} from './books/book-detail/book-detail.component';
import { BookListComponent} from './books/book-list/book-list.component';
import { MockPipe} from './mock_tests/pipes/mock-trim.pipe';
import { BookService} from '../app/books/book.service';
import { MockBookService } from './mock_tests/services/mock-book.service';

describe('AppComponent', () => {
  let appComponent : AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule, 
        MatSelectModule,
        MatButtonModule ,
        MatCardModule ,
        MatBadgeModule,
        MatTooltipModule,
        BrowserAnimationsModule,
        HttpClientModule
      ],
      declarations: [
        AppComponent,
        AddBookComponent,
        BookDetailComponent,
        BookListComponent,
        FormGroupDirective,
        MockPipe
      ],
      providers:[{ provide: BookService, useClass: MockBookService }]
    }).compileComponents().then(() => {
        fixture = TestBed.createComponent(AppComponent);
        appComponent = fixture.componentInstance;

    });
  }));

  it('should create the app component', () => {    
    expect(appComponent).toBeDefined();
  });

  it(`should have as title 'Simple library management system'`, () => {    
    expect(appComponent.title).toEqual('Simple library management system');
  });

});

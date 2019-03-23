import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BookListComponent} from './book-list.component';
import { AddBookComponent } from '../book/add-book.component';
import {  MatFormFieldModule,
    MatInputModule, 
    MatSelectModule,
    MatButtonModule ,
    MatCardModule ,
    MatBadgeModule,
    MatTooltipModule } from '@angular/material';

import { FormGroupDirective, FormGroup,FormControl,Validators } from '@angular/forms';
import { BookDetailComponent} from '../book-detail/book-detail.component';
import { MockPipe} from '../../../mock-tests/pipes/mock-trim.pipe';
import { BookService} from '../book.service';
import { MockBookService } from '../../../mock-tests/services/mock-book.service';
import { Book } from 'src/app/shared/models/books/book';


describe('BookListComponent', () => {
    let bookListComponent: BookListComponent;  
    let fixture : ComponentFixture<BookListComponent>;
    let bookService: BookService;
    let addBookformGroup: FormGroupDirective
    beforeEach(async(() => {
      
        TestBed.configureTestingModule({
          imports: [
           MatFormFieldModule,
            MatInputModule, 
            MatSelectModule,
            MatButtonModule ,
            MatCardModule ,
            MatBadgeModule,
            MatTooltipModule ,
            BrowserAnimationsModule
          ],
          declarations: [         
            BookDetailComponent,
            BookListComponent,
            FormGroupDirective,
            MockPipe
          ],
          providers:[{provide: BookService, useClass: MockBookService}]
        }).compileComponents().then(() => {          
            fixture = TestBed.createComponent(BookListComponent);
            bookListComponent = fixture.componentInstance;          
            bookService = TestBed.get(BookService);     
                        
        });
    }));

    it('should create the BookListComponent', () => {       
        expect(bookListComponent).toBeDefined();
    });

    it('should call getBooks service when init component', () => {   
        spyOn(bookService,'getBooks'); 
        bookListComponent.ngOnInit();   
        expect(bookService.getBooks).toHaveBeenCalled();
    });

    it('should call deleteBook service when listening delete event', () => {   
        let book = new Book(1,'title','category','description')
        spyOn(bookService,'deleteBook'); 
        bookListComponent.deleteBookListen(book);   
        expect(bookService.deleteBook).toHaveBeenCalledWith(book);
    });   
});



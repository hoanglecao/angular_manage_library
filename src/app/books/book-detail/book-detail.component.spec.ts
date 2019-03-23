import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BookDetailComponent} from './book-detail.component';
import {  MatFormFieldModule,
    MatInputModule, 
    MatSelectModule,
    MatButtonModule ,
    MatCardModule ,
    MatBadgeModule,
    MatTooltipModule } from '@angular/material';


import { MockPipe} from '../../../mock-tests/pipes/mock-trim.pipe';
import { Book } from 'src/app/shared/models/books/book';

describe('BookDetailComponent', () => {
    let bookDetailComponent: BookDetailComponent;
    let fixture : ComponentFixture<BookDetailComponent>;  
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
            MockPipe
          ]         
        }).compileComponents().then(() => {
            fixture = TestBed.createComponent(BookDetailComponent);
            bookDetailComponent = fixture.componentInstance;
          
        });
    }));

    it('should create the BookDetailComponent', () => {       
        expect(bookDetailComponent).toBeDefined();
      }); 

      it('should emit even when deleting book', () => {
        let book = new Book(1,'title','category','description');
        spyOn(bookDetailComponent.deleteBookEvent, 'emit');
        bookDetailComponent.deleleBook(book);           
        expect(bookDetailComponent.deleteBookEvent.emit).toHaveBeenCalledWith(book);
     });
});



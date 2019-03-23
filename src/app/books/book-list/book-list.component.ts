import { Component , OnInit,OnChanges, Input, SimpleChanges } from '@angular/core';
import * as _ from "lodash";
import { Book } from 'src/app/shared/models/books/book';
import { BookService} from '../book.service';

@Component({
    selector: 'book-list',
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.css']
})

export class BookListComponent implements OnInit, OnChanges {
   @Input() newBook : Book;
   books: Book[] = [];
  
   constructor( private bookService: BookService){}

   ngOnChanges(changes: SimpleChanges) {    
    if (typeof changes['newBook'] !== "undefined") {
        var newBook = changes['newBook'];
        if (!newBook.isFirstChange()) {        
            this.books.unshift(newBook.currentValue);
        }
    }
   }

   ngOnInit(){
        this.books = this.bookService.getBooks();             
    }

    deleteBookListen(book: Book) {
     this.books = this.bookService.deleteBook(book);
    };

}
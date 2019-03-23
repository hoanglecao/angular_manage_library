import { Component, Output ,Input, EventEmitter } from '@angular/core';
import { Book } from '../../shared/models/books/book';

@Component({
 selector : 'book-detail',
 templateUrl : './book-detail.component.html',
 styleUrls : ['./book-detail.component.css']
})

export class BookDetailComponent {
    @Input() book: Book;
    @Output() deleteBookEvent = new EventEmitter();
    

    deleleBook(book) {
        this.deleteBookEvent.emit(book);
    }
}
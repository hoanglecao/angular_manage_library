import { Injectable} from '@angular/core';
import { Book } from 'src/app/shared/models/books/book';

@Injectable()
export class MockBookService {
    getBooks () {
        return [{ id: 0, title: '', category: '' , description: '' }];
    };
    deleteBook(book: Book){
        return []
    };
}
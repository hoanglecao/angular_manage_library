import { Injectable} from '@angular/core';
import * as _ from "lodash";

import { Book } from '../shared/models/books/book';

@Injectable()
export class BookService {
   
    private books:Book[] = [{ 'id': 1, 'title': 'A Dog of Flanders', 'category' : 'Drama', 'description': 'A Dog of Flanders is an 1872 novel by English author Marie Louise de la Ramée published with her pseudonym "Ouida". It is about a Flemish boy named Nello and his dog, Patrasche. The story, of English origin, has not been read widely in Belgium'},
    { 'id': 2, 'title': 'Can You Keep a Secret', 'category' : 'Comedy', 'description': 'Meet Emma Corrigan, a young woman with a huge heart, an irrepressible spirit, and a few little secrets'},
    { 'id': 3, 'title': 'The Blind Side: Evolution of a Game ', 'category' : 'Sport', 'description': 'When we first meet Michael Oher, he is one of thirteen children by a mother addicted to crack; he does not know his real name, his father, his birthday'}];

    getBooks(): Book[] {
        return this.books;
    };

    deleteBook(book) : Book[] {
      this.books =  _.remove(this.books, item => {
              return item.title !== book.title && item.category !== book.category
        });
     return this.books;
    }
}

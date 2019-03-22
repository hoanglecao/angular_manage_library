import { NgModule} from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { AddBookComponent} from './book/add-book.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';

import { BookService} from './book.service';

@NgModule({
imports: [
    SharedModule
],

declarations: [
    AddBookComponent,
    BookListComponent,
    BookDetailComponent
],
providers: [BookService],

exports : [
    AddBookComponent,
    BookDetailComponent
]

})
export class BookModule {}
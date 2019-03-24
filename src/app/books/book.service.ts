import { Injectable} from '@angular/core';
import * as _ from "lodash";

import { Book } from '../shared/models/books/book';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ConfigService } from '../config.service';
import { ErrorHandleService} from '../shared/errors/error-handle.service';

@Injectable()
export class BookService {
    uri: String = ''
   
     httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
      };
        
    constructor(private http: HttpClient, 
                private configService: ConfigService, 
                private errorHandleService: ErrorHandleService){

     this.uri =  this.configService.apiURI ;
    }
    
    addBook (book: Book): Observable<Book> {
        return this.http.post<Book>(`${this.uri}/books`, book, this.httpOptions)
                .pipe(
                    catchError(this.errorHandleService.handleError)
                )
                      
      }
     
      getBooks(): Observable<Book[]> {
        return this.http.get<Book[]>(`${this.uri}/books`, this.httpOptions)
                .pipe(
                  catchError(this.errorHandleService.handleError)
                )
    }

    
    deleteBook (id: number): Observable<{}> {
        const url = `${this.uri}/books/${id}`; 
        return this.http.delete(url, this.httpOptions)
          .pipe(
            catchError(this.errorHandleService.handleError)
          );
      }
}

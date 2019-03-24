import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { MatCardModule } from '@angular/material';

import { BookModule } from './books/book.module';
import { AppComponent } from './app.component';
import { ErrorHandleService} from './shared/errors/error-handle.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BookModule,
    MatCardModule
  ],
  providers: [ErrorHandleService],
  bootstrap: [AppComponent]
})
export class AppModule { }

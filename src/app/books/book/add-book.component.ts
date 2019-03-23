
import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators, FormGroupDirective} from '@angular/forms';
import { NoWhitespaceValidator} from '../../shared/custom-validators/no-whitespace-validator';
import { ControlErrorStateMatcher} from '../../shared/errors/error-state-matcher';
import { Book } from '../../shared/models/books/book';



@Component({
    selector: 'add-book',
    templateUrl: './add-book.component.html',
    styleUrls: ['./add-book.component.css']

})
export class AddBookComponent implements OnInit {
    book : Book
    addBookForm: FormGroup;
    matcher = new ControlErrorStateMatcher();
    ngOnInit(){
        this.createForm();
    }
    onSubmit(addBookformGroup: FormGroupDirective) {       
        this.book = addBookformGroup.value ;
        addBookformGroup.resetForm();
     }

     createForm() {
        this.addBookForm = new FormGroup({
            title : new FormControl('',Validators.compose([Validators.required,NoWhitespaceValidator, Validators.maxLength(30)])),
            category: new FormControl('', Validators.required),
            description: new FormControl('', Validators.compose([Validators.required,NoWhitespaceValidator]))
        });
    };
}


import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AddBookComponent} from './add-book.component';
import {  MatFormFieldModule,
    MatInputModule, 
    MatSelectModule,
    MatButtonModule ,
    MatCardModule ,
    MatBadgeModule,
    MatTooltipModule } from '@angular/material';

import {FormGroupDirective, FormGroup,FormControl,Validators } from '@angular/forms';
import { BookDetailComponent} from '../book-detail/book-detail.component';
import { BookListComponent} from '../book-list/book-list.component';
import { MockPipe} from '../../mock_tests/pipes/mock-trim.pipe';
import { BookService} from '../book.service';
import { MockBookService } from '../../mock_tests/services/mock-book.service';
import {NoWhitespaceValidator} from '../../shared/custom-validators/no-whitespace-validator';

describe('AddBookComponent', () => {
    let addBookComponent: AddBookComponent;
    let fixture : ComponentFixture<AddBookComponent>;
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
            AddBookComponent,
            BookDetailComponent,
            BookListComponent,
            FormGroupDirective,
            MockPipe
          ],
          providers:[{provide: BookService, useClass: MockBookService}]
        }).compileComponents().then(() => {
            fixture = TestBed.createComponent(AddBookComponent);
            addBookComponent = fixture.componentInstance;
            bookService = TestBed.get(BookService);     
           
                                            
        });
    }));

    it('should create the AddBookComponent', () => {       
        expect(addBookComponent).toBeDefined();
      });

    it('should create add book form when init component', (() => {        
        addBookComponent.ngOnInit();
        expect(addBookComponent.createForm).toBeTruthy();       
    }));  
   
  it('form invalid when empty',(() => {           
   
    addBookComponent.addBookForm = new FormGroup({
        title : new FormControl('football',Validators.compose([Validators.required, Validators.maxLength(30)])),
        category: new FormControl('sport', Validators.required),
        description: new FormControl('test', Validators.compose([Validators.required]))
    });
        addBookComponent.addBookForm.controls['title'].setValue('');             
        expect(addBookComponent.addBookForm.valid).toBeFalsy();       
    }));
    
    it('form valid when all fileds set value',(() => {     
        addBookComponent.addBookForm = new FormGroup({
            title : new FormControl('',Validators.compose([Validators.required, Validators.maxLength(30)])),
            category: new FormControl('', Validators.required),
            description: new FormControl('', Validators.compose([Validators.required]))
        });     
        addBookComponent.addBookForm.controls['title'].setValue('title');
        addBookComponent.addBookForm.controls['category'].setValue('category');
        addBookComponent.addBookForm.controls['description'].setValue('Description test');      
        expect(addBookComponent.addBookForm.valid).toBeTruthy();       
    }));

    it('title field required validity',(() => {     
        addBookComponent.addBookForm = new FormGroup({
            title : new FormControl('title',Validators.compose([Validators.required, Validators.maxLength(30)])),
            category: new FormControl('', Validators.required),
            description: new FormControl('', Validators.compose([Validators.required]))
        });     
        addBookComponent.addBookForm.controls['title'].setValue('');        
        expect(addBookComponent.addBookForm.get('title').errors.required).toBeTruthy();       
    }));

    it('title field whitespace validity',(() => {     
        addBookComponent.addBookForm = new FormGroup({
            title : new FormControl('title',Validators.compose([Validators.required, NoWhitespaceValidator, Validators.maxLength(30)])),
            category: new FormControl('', Validators.required),
            description: new FormControl('', Validators.compose([Validators.required]))
        });     
        addBookComponent.addBookForm.controls['title'].setValue('  ');        
        expect(addBookComponent.addBookForm.get('title').errors.whitespace).toBeTruthy();       
    }));

    it('title field maxlength validity',(() => {     
        addBookComponent.addBookForm = new FormGroup({
            title : new FormControl('title',Validators.compose([Validators.required, NoWhitespaceValidator, Validators.maxLength(30)])),
            category: new FormControl('', Validators.required),
            description: new FormControl('', Validators.compose([Validators.required]))
        });     
        addBookComponent.addBookForm.controls['title'].setValue('1234567890123456789012345678901');        
        expect(addBookComponent.addBookForm.get('title').errors.maxlength).toBeTruthy();       
    }));

    it('description field required validity',(() => {     
        addBookComponent.addBookForm = new FormGroup({
            title : new FormControl('',Validators.compose([Validators.required, NoWhitespaceValidator, Validators.maxLength(30)])),
            category: new FormControl('', Validators.required),
            description: new FormControl('description', Validators.compose([Validators.required]))
        });     
        addBookComponent.addBookForm.controls['description'].setValue('');        
        expect(addBookComponent.addBookForm.get('description').errors.required).toBeTruthy();       
    }));

    it('category field required validity',(() => {     
        addBookComponent.addBookForm = new FormGroup({
            title : new FormControl('',Validators.compose([Validators.required, NoWhitespaceValidator, Validators.maxLength(30)])),
            category: new FormControl('category', Validators.required),
            description: new FormControl('', Validators.compose([Validators.required]))
        });     
        addBookComponent.addBookForm.controls['category'].setValue('');        
        expect(addBookComponent.addBookForm.get('category').errors.required).toBeTruthy();       
    }));

});



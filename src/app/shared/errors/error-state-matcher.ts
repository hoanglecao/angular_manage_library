import {ErrorStateMatcher} from '@angular/material/core';
import {FormControl, FormGroupDirective} from '@angular/forms';

export class ControlErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective  | null): boolean {
      const isSubmitted = form && form.submitted;
      return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
  }
  
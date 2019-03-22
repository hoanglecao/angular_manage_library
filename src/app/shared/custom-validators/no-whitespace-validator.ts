import { AbstractControl } from '@angular/forms';
import * as _ from "lodash";

export function NoWhitespaceValidator(control: AbstractControl) {
    return  _.isEmpty(_.trim(control.value)) ? {'whitespace': true}: null ;
  }
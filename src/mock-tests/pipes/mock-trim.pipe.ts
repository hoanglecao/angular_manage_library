import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'trim'})
export class MockPipe implements PipeTransform {
    transform(): string {
       return '';
    }
}
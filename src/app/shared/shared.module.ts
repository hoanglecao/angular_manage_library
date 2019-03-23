import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule} from '@angular/common';
import { MatFormFieldModule,
         MatInputModule, 
         MatSelectModule,
         MatButtonModule ,
         MatCardModule ,
         MatBadgeModule,
         MatTooltipModule
         
        } from '@angular/material';

import { TrimPipe }  from 'src/app/shared/custom-pipes/trim.pipe';
import { MockPipe }  from '../../mock-tests/pipes/mock-trim.pipe';
@NgModule({

    imports: [
                ReactiveFormsModule,
                CommonModule,
                MatInputModule,
                MatFormFieldModule,
                MatSelectModule,
                MatButtonModule,
                MatCardModule,
                MatBadgeModule,
                MatTooltipModule
                
            ],
           
    declarations:[TrimPipe,MockPipe],
    exports: [
                ReactiveFormsModule,
                CommonModule,
                MatInputModule,
                MatFormFieldModule,
                MatSelectModule,
                MatButtonModule,
                MatCardModule,
                MatBadgeModule,
                MatTooltipModule,
                TrimPipe
            ]

})
export class SharedModule {}

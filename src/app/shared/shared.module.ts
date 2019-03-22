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
   
    exports: [
                ReactiveFormsModule,
                CommonModule,
                MatInputModule,
                MatFormFieldModule,
                MatSelectModule,
                MatButtonModule,
                MatCardModule,
                MatBadgeModule,
                MatTooltipModule
            ]

})
export class SharedModule {}
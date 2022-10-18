import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//PrimeNG
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [],
  exports: [    
    ButtonModule,
    CardModule
  ]
})
export class PrimeNgModule { }

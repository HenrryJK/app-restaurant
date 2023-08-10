import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
  ],
  imports: [
    RouterModule,
    MatIconModule
  ],
  exports:[
    MatIconModule,
  ]
})


export class SharedModule { }

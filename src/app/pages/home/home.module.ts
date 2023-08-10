import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageRoutingModule } from './home-routing.module';
import { HomePage } from './home.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeMovilComponent } from './home-movil/home-movil.component';
import { DasboardComponent } from './dasboard/dasboard.component';




@NgModule({
  declarations: [HomePage , HomeMovilComponent , DasboardComponent],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    SharedModule
  ],
})
export class HomePageModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { HomeMovilComponent } from './home-movil/home-movil.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    // children:[
    //   {
    //     path:'home-movil',
    //     component:HomeMovilComponent
    //   }

    // ]
  }

];




@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }

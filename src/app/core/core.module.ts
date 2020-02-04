import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';



@NgModule({
  declarations: [MenuComponent, HomeComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    MenuComponent,
    HomeComponent
  ]
})
export class CoreModule { }

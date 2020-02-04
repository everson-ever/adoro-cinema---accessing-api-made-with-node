import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {CardModule} from 'primeng/card';
import {PanelModule} from 'primeng/panel';
import {ButtonModule} from 'primeng/button';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FilmesComponent } from './filmes/filmes.component';



@NgModule({
  declarations: [FilmesComponent],
  imports: [
    CommonModule,
    CardModule,
    HttpClientModule,
    PanelModule,
    ButtonModule,
    BrowserModule,
    BrowserAnimationsModule,
  ],
  exports: [FilmesComponent]
})
export class CinemaModule { }

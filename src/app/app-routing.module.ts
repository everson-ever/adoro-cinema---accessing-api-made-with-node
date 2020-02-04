import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmesComponent } from './cinema/filmes/filmes.component';
import { HomeComponent } from './core/components/home/home.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'filmes-cartaz', component: FilmesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

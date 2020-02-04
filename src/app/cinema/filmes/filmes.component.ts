import { Component, OnInit, Input } from '@angular/core';
import { FilmesService } from '../services/filmes.service';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.css']
})
export class FilmesComponent implements OnInit {

  @Input() titulo: string;
  public listaFilmes: Array<any>;
  public page: number = 1;
  public loadingNext = false;
  public loadingPrevios = false;
  public loadingFilmes = false;

  constructor(private filmesServices: FilmesService) { }

  ngOnInit() {
    this.getAll(this.page);
  }

  public getAll(page: number) {
    this.loadingFilmes = true
    try {
      this.filmesServices.getAll(page).subscribe(data => {
        this.listaFilmes = data;
      });
    }
    catch(err) {
      console.log(err);
    }
    finally {
      this.loadingFilmes = false;
    }

  }

  public async nextPage() {
      this.page++;
      this.getAll(this.page);
  }

  public async previosPage() {

      if (!(this.page == 1)) {  
        this.page--;
        this.getAll(this.page);
  
      }

  }

}

import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FilmService } from '../core/film.service';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.scss']
})
export class FilmDetailComponent implements OnInit, OnDestroy {
  @Input() nomerImdbid:string;
  @Input() myinputMsg: string;  
  dataFilmDetail=[];
  imdb:string;
  filmDetail:Subscription;

  constructor(private film:FilmService) { }
  ngOnDestroy():void{
    this.filmDetail.unsubscribe();
  }

  ngOnInit(): void {
    this.filmDetail=this.film.getFilmListDetailListerner()
    .subscribe(result=>{
      this.dataFilmDetail=[result];
      console.log(this.dataFilmDetail);
    })
  }

}


import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { filmModel } from '../core/film.model';
import { FilmService } from '../core/film.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit, OnDestroy {
  dataImdbid:string
  nomer:number;

  dataFilm:any;
  dataFilmDetail=[];
  dataOn: filmModel[];
  myInputMessage: string;

  kondisi:boolean=false;
  filmListObservable: Subscription;

  constructor(private film: FilmService) { }
  ngOnDestroy(): void {
    this.filmListObservable.unsubscribe();
  }
  

  ngOnInit(): void {
    this.filmListObservable = this
      .film
      .getFilmListListener()
      .subscribe(result => {
        this.dataFilm = result.Search;
      });

    // this.film.onFilm().toPromise().then(data=>{
    //   console.log(data.Search);
    //   this.dataFilm=data.Search;
    // })
  }

  modalView(dataimdbID){
    // this.myInputMessage = "I am the parent comppnent";
    this.film.searchFilmDetail(dataimdbID);
    this.kondisi=true;
    // console.log(this.dataImdbid);
  }


}
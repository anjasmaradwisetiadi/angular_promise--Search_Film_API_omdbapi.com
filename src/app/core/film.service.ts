import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { filmDetailModel, filmModel } from './film.model';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  urlFilm: string ="your_url&key_www.omdbapi.com";
  FilmListSubject = new Subject<filmModel>(); 
  FilmListDetailSubject = new Subject < filmDetailModel>();
  sorting:string;
  title:string;


  constructor(private http: HttpClient) { }

  searchFilm(searchTitle:string){
    let httpOptionsFilm = new HttpParams();
    httpOptionsFilm = httpOptionsFilm.append('s', searchTitle);
    return this.http.get<filmModel>(this.urlFilm, {params :httpOptionsFilm})
      .toPromise()
      .then(result => {
        this.FilmListSubject.next(result);
      })
  }

  searchFilmDetail(filmDetail:string){
    console.log(filmDetail);
    let httpOptionsFilm = new HttpParams();
    httpOptionsFilm = httpOptionsFilm.append('i', filmDetail);
    return this.http.get<filmDetailModel>(this.urlFilm, { params: httpOptionsFilm })
      .toPromise()
      .then(result => {
        this.FilmListDetailSubject.next(result);
      })
  }

  // onFilm(): Observable<any>{

  //   // const httpOptionsFilm = {
  //   //   params: new HttpParams({
  //   //     s: this.searchFilm
  //   //   })
  //   // }
    
  //   // let data=this.searchFilm;
  //   // this.sorting=this.searchFilm;
  //   // console.log(data);

  //   let httpOptionsFilm = new HttpParams();
  //   httpOptionsFilm = httpOptionsFilm.append('s', this.searchFilm);

  //   console.log('2 : '+this.searchFilm);
  //   return this.http.get<filmModel>(this.urlFilm, {params :httpOptionsFilm});
  // }

  getFilmListListener(){
    return this.FilmListSubject.asObservable();
  }
  getFilmListDetailListerner(){
    return this.FilmListDetailSubject.asObservable();
  }


}

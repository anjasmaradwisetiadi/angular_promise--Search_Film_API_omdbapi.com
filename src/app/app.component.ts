import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FilmService } from './core/film.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  @ViewChild('form',{static:true}) dataForm:NgForm;
  searchTitle:string="";
  constructor(private service: FilmService){}

  ngOnInit(){
    this.searchButton();
  }

  searchButton(){
    this.searchTitle = this.dataForm.value.search || "";
    console.log(this.searchTitle);

    this.service.searchFilm(this.searchTitle);
  }

}

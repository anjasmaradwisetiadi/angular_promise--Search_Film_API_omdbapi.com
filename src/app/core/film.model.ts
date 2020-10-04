export interface filmModel {
    Search:[{
        Poster: string;
        Title: string;
        Type: string;
        Year: string;
        imdbID: string;
    }] 
}

export interface filmDetailModel{
     imdbID: string;
     Poster: string;
     Title: string;
     Director: string;
     Actors: string;
     Plot: string;

}
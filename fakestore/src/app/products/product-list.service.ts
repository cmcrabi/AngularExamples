import { HttpClient, HttpErrorResponse } from "@angular/common/http"
import { Injectable } from "@angular/core";
import { Observable, throwError, catchError, tap, map } from "rxjs";
import { IProduct } from "./IProduct";

@Injectable({
    providedIn : 'root'
})

export class ProductListService{
    private apiUrl = "https://fakestoreapi.com/products";

    constructor(private http:HttpClient){}

    getProducts(): Observable<IProduct[]>
    {
        let response = this.http.get<IProduct[]>(this.apiUrl).pipe(
            tap(result => console.log('All data: ', result)),
            catchError(this.HandleError)
        );
        return response;
    }

    private HandleError(err: HttpErrorResponse)
    {
        let errorMessage = '';
        if(err.error instanceof ErrorEvent)
        {
            errorMessage = `Error occurred: ${err.error.message}`;            
        }
        else
        {
            errorMessage = `server returned code: ${err.status}, error message: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(()=>new Error(errorMessage));
    }
}
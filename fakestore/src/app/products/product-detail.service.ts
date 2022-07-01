import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, throwError, tap } from "rxjs";
import { IProduct } from "./IProduct";

@Injectable({
    providedIn: 'root'
  })

export class ProductDetailService {
    private productDetailUrl = "https://fakestoreapi.com/products/"

    constructor(private http:HttpClient) {}

    getProduct(id:string):Observable<any>{
        var response = this.http.get<IProduct>(this.productDetailUrl + id).pipe(
            tap(data => console.log('Data: ', JSON.stringify(data))),
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
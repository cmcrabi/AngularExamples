import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, throwError, tap, map } from "rxjs";
import { IEmployee } from "./IEmployee";
import { IEmployeeAPI } from "./IEmployeeAPI";

@Injectable({
    providedIn : 'root'
})

export class EmployeeListService{
    //private apiUrl = 'https://dummy.restapiexample.com/api/v1/employees';
    private apiUrl = "/api/employees";

    
    constructor(private http: HttpClient){}

    getEmployees(): Observable<IEmployee[]>
    {
        let response = this.http.get<IEmployeeAPI>(this.apiUrl).pipe(
            tap(result => console.log('Filtered data: ', result.data)),
            catchError(this.HandleError)
        );
        let response1 = response.pipe(map(res=>res.data));
        console.log('Filtered1: ', response1)
        return response1;
    }

    private HandleError(err: HttpErrorResponse)
    {
        let errorMessage = '';
        if(err.error instanceof ErrorEvent)
        {
            errorMessage = `An error occurred: ${err.error.message}`;
        }
        else{
            errorMessage = `server returned code: ${err.status}, error message is ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(()=>new Error(errorMessage));
    }
    
}
import { Component, OnInit } from "@angular/core";
import { EmployeeListService } from "./employee-list.service";
import { IEmployee } from "./IEmployee";
import { IEmployeeAPI } from "./IEmployeeAPI";

@Component({
    selector: 'app-employee',
    templateUrl: './employee-list.component.html'
})

export class EmployeeListComponent implements OnInit{

    pageTitle: string = 'List of employees';
    private _employeeListService;
    employees: IEmployee[] = [];
    employeeResponse: IEmployeeAPI ;
    errorMessage: string = '';
    constructor(employeeListService : EmployeeListService)
    {
        this._employeeListService = employeeListService;
        this.employeeResponse = {
            status: "success",
            data: []
        };
        console.log('constructor');
    }

    ngOnInit(): void
    {
        this._employeeListService.getEmployees().subscribe({
            next: employees => this.employees = employees,
            error: err => this.errorMessage = err
        });
    }
}
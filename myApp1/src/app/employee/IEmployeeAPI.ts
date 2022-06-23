import { IEmployee } from "./IEmployee";

export interface IEmployeeAPI {
    status: string;
    data: Array<IEmployee>;
}
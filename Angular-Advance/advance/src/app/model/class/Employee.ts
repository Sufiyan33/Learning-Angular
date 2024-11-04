export class Employee{
    id: number;
    name: string;
    salary: number;
    address: string;
    companyName?: string;

    constructor(){
        this.id = 0;
        this.name= '';
        this.salary = 0;
        this.address = '';
    }
}
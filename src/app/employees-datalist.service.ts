import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeesDatalistService {
  employeeList = [
                  {firstName: "Raviteja",
                   lastName : 'something1' , 
                   gender:'male' , 
                   dob: '26-04-2019',
                   department: 'IT'
                   },
                   {firstName: "ivar",
                   lastName : 'something2' , 
                   gender:'male' , 
                   dob: '26-04-2019',
                   department: 'IT'
                   },{firstName: "Ravi",
                   lastName : 'something3' , 
                   gender:'male' , 
                   dob: '26-04-2019',
                   department: 'IT'
                   },{firstName: "nani",
                   lastName : 'something4' , 
                   gender:'male' , 
                   dob: '26-04-2019',
                   department: 'IT'
                   },{firstName: "teja",
                   lastName : 'something5' , 
                   gender:'male' , 
                   dob: '26-04-2019',
                   department: 'IT'
                   }]

  constructor() { }
  sortData() {
    return this.employeeList.sort((a,b) =>  (a.firstName.toLowerCase() > b.firstName.toLowerCase() ? 1 : -1))
  }
}
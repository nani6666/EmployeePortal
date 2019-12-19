import { Component, OnInit } from '@angular/core';
import { EmployeesDatalistService } from '../employees-datalist.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-employee-table-list',
  templateUrl: './employee-table-list.component.html',
  styleUrls: ['./employee-table-list.component.css']
})
export class EmployeeTableListComponent implements OnInit {

  constructor(public dataList : EmployeesDatalistService) { }

  ngOnInit() {
  this.dataList.sortData();
  console.log(this.dataList.sortData());
  }

 
}
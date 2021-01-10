import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { EmployeeComponent } from './employees/employee/employee.component';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { EmployeeCreateComponent } from './employees/employee-create/employee-create.component';
import { EmployeeAddComponent } from './employees/employee-add/employee-add.component';

const routes: Routes = [
  { path: 'employee', component: EmployeeComponent },
  { path: 'employeelist', component: EmployeeListComponent },
  { path: 'employeecreate', component: EmployeeAddComponent }
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [EmployeeComponent,EmployeeListComponent,EmployeeAddComponent]
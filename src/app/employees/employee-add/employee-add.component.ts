import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from 'src/app/shared/employee';
import { EmployeeService } from 'src/app/shared/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {

  constructor(public service: EmployeeService, public httpClient : HttpClient, private router: Router) { }

  //user: User=new User("","",0,"");
  message:any;
  employee: Employee = new Employee("", "", "", "", "", "");
  // submitted = false;
  submitted = true;

  ngOnInit(): void {
  }

  save() {
    this.service.createEmployee(this.employee)
      .subscribe(data => console.log(data), error => console.log(error));
    // this.Employee = new Employee();
    console.log(this.employee);
    this.employee;
    this.gotoList();
  }

  onClear() {
    this.service.form.reset();
    this.service.initializeFormGroup();
  }

  onSubmit() {
    console.log('In onSubmit() ...')
    this.submitted = true;
    this.save();    
  }

  submitForm() : void 
{
  this.service.doRegistration(this.service.form.value).subscribe(
     b => alert(`Employee Added Successfully`),
     err => alert(`Exception While Adding: ${err}`) 
 );
}

  gotoList() {
    this.router.navigate(['/employees']);
  }

  submitForm2() {
    console.log(this.service.form.value)
    alert(this.service.form.value)
  }

  public submitForm1(){
    let resp=this.service.doRegistration(this.employee);
    resp.subscribe((data)=>this.message=data);
  }

}


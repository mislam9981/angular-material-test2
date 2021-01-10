import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormsModule, FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  // constructor(private httpClient: HttpClient, private datePipe: DatePipe) { }
  constructor(private httpClient: HttpClient) { }

  private baseUrl = 'http://localhost:9393/springboot-crud-rest/api/employees';
  //private baseUrl = 'http://localhost:9090/api/v1/employees';
  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address:  new FormControl(''),
    phoneNumber:  new FormControl(''),
    emailId: new FormControl('')
  });

  // tslint:disable-next-line: typedef
  initializeFormGroup() {
    this.form.setValue({
      $key: null,
      firstName: '',
      lastName: '',
      address: '',
      phoneNumber: '',
      emailId: ''
    });
  }

  getEmployees(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(`${this.baseUrl}`);
  }

  // insertEmployee(employee) {
  //   this.employeeList.push({
  //     fullName: employee.fullName,
  //     email: employee.email,
  //     mobile: employee.mobile,
  //     city: employee.city,
  //     gender: employee.gender,
  //     department: employee.department,
  //     // tslint:disable-next-line: triple-equals
  //     hireDate: employee.hireDate == '' ? '' : this.datePipe.transform(employee.hireDate, 'yyyy-MM-dd'),
  //     isPermanent: employee.isPermanent
  //   });
  // }

  // updateEmployee(employee) {
  //   this.employeeList.update(employee.$key,
  //     {
  //       fullName: employee.fullName,
  //       email: employee.email,
  //       mobile: employee.mobile,
  //       city: employee.city,
  //       gender: employee.gender,
  //       department: employee.department,
  //       // tslint:disable-next-line: triple-equals
  //       hireDate: employee.hireDate == '' ? '' : this.datePipe.transform(employee.hireDate, 'yyyy-MM-dd'),
  //       isPermanent: employee.isPermanent
  //     });
  // }

  // deleteEmployee($key: string) {
  //   this.employeeList.remove($key);
  // }

  // populateForm(employee) {
  //   this.form.setValue(_.omit(employee,'departmentName'));
  // }


  // public doRegistration(user){
  //   return this.http.post('http://localhost:9090/register', user, {responseType: 'text' as 'json'});
  // }

  // public getUsers(){
  //   return this.http.get('http://localhost:9090/getAllUsers');
  // }

  // public getUserByEmail(email){
  //   return this.http.get('http://localhost:9090//findUser/' + email);
  // }

  // public deleteUser(id){
  //   return this.http.delete('http://localhost:9090/cancel/' + id);
  // }

  getEmployee(id: number): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/${id}`);
  }

  createEmployee(employee: Object): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}`, employee);
  }

  updateEmployee(id: number, value: any): Observable<Object> {
    return this.httpClient.put(`${this.baseUrl}/${id}`, value);
  }

  deleteEmployee(id: number): Observable<any> {
    return this.httpClient.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getEmployeesList(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}`);
  }

  public doRegistration(employee){
      return this.httpClient.post('http://localhost:9393/springboot-crud-rest/api/employees', employee, {responseType: 'text' as 'json'});
  }
}
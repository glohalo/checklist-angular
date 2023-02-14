import { Component } from '@angular/core';
import { Employee } from './models/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  employeeArray: Employee[] = [
    {id: 1, name: "Ryan", country: "USA"},
    {id: 2, name: "Rya2", country: "USA"},
    {id: 3, name: "Ryan3", country: "USA"}
  ];

  selectedEmployee: Employee =new Employee();
  openForEdit(employee: Employee){
    this.selectedEmployee=employee;
  }
  delete(){
    if( confirm ('Are you sure you want to delete it?')){
      this.employeeArray = this.employeeArray.filter( employee => employee != this.selectedEmployee);
      this.selectedEmployee = new Employee();
    }
    //pendiente agregar un modal
  }
  addOrEdit(){
    //si no hay empleado seleccionado, un id==0
    if (this.selectedEmployee.id === 0) {
      this.selectedEmployee.id = this.employeeArray.length + 1 ;
      this.employeeArray.push(this.selectedEmployee);
    };//pero si tengo un Id... esto es lo que sucede
    this.selectedEmployee = new Employee();
  };
}
//las propiedades de los datos, metodos -definicion de los datos
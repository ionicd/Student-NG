import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})

export class StudentAddComponent implements OnInit {

  studentForm: FormGroup

  constructor() { }

  ngOnInit(): void {
    this.studentForm = new FormGroup({
      id: new FormControl(''),
      name : new FormControl(''),
      address : new FormControl (''),
      email: new FormControl(''),
      dob: new FormControl(''),
      gender: new FormControl (''),
      department: new FormControl(''),
      subject: new FormControl ('')
    })
  }

  saveStudent = (student:any) =>{
    console.log(student)
  }
}

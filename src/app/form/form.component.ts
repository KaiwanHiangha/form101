import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { user } from './User';
import { Key } from 'protractor';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  formGroup: FormGroup;
  constructor(private formBuild:FormBuilder) { 
    
  }

  ngOnInit() {
    // console.log(form.Valid,form.invalid)
    // console.log(form.get('FirstName')).console.error();
    
   this.formGroup = this.formBuild.group({
     FirstName:['Kaiwan',[Validators.required]],
     lastName:['Hiangha'],
     email:['Kaiwan.h@ku.th'],
     age:[22]
   } )
  }
  EmailValidator(control: AbstractControl){
    const value: string = control.value;
    if (value && value.includes('@')){
      return null;
    }
    return{
      email: true
      }
    }
  
  onSubmit(form: FormGroup){
    const{
      FirstName,lastName,age,email
    }= form.value;
    
    console.log(form);
  }

}
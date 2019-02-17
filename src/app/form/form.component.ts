import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
formGroup
  constructor(private formBuild:FormBuilder) { 
    
  }

  ngOnInit() {
   this.formGroup = this.formBuild.group({
     FirstName:this.formBuild.control(''),lastName:[''],email:[''],age:['']
   })
  }
  onSubmit(form){
    console.log(form);
  }

}
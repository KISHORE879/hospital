import { Component} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-regi-form',
  templateUrl:'./regi-form.component.html',
  styleUrls: ['./regi-form.component.css']
})
export class RegiFormComponent  {

  constructor(private formbuilder:FormBuilder) { }
 regiForm=this.formbuilder.group({
 userName:['',[Validators.required,Validators.pattern('^[a-zA-Z]{5,15}$')]],
 cause:['',[Validators.required,Validators.pattern('^[a-zA-Z]{5,15}$')]],
 Address:this.formbuilder.group({
   city:['',[Validators.required,Validators.pattern('^[a-zA-Z]{5,15}$')]],
 })

 })
 submitForm(){
   console.log(this.regiForm.value)
 }
 

}

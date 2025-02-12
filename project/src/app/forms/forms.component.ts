import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { AbstractControl, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {
  myreactiveform!:FormGroup
  constructor(){
    this.createform()
  }

  createform(){
    this.myreactiveform=new FormGroup({
      'email':new FormControl('',[Validators.required,Validators.email,this.validatationforname.bind(this)]),
      'pass':new FormControl('',[Validators.required,Validators.pattern('(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*'),Validators.maxLength(10),Validators.minLength(5)]),
      'confirm':new FormControl('',[Validators.required,Validators.maxLength(10),Validators.minLength(5)]),
      'username':new FormControl(""),
      'skills':new FormArray([
        new FormControl('')
      ])


    })
  }
onsubmit(){
  console.log(this.myreactiveform);
}
// Custom ValidatorFn
 validatationforname: ValidatorFn = (control: AbstractControl): { [key: string]: any } | null => {
  // Perform your custom validation logic here
  const value = control.value; // Get the value from the control
  // Example validation logic: Check if the value contains the word "NameError"
  if (value && value.includes('arpita@gmail.com')) {
    return { nameError: true }; // Return an object representing the validation error
  }
  return null; // Return null when validation passes
};



onUsernameInput() {
  const usernameControl = this.myreactiveform.get('username');

  // Example dynamic validation
  if (usernameControl?.value === 'admin') {
    usernameControl.setValidators([Validators.required, Validators.minLength(5)]);
  } else {
    usernameControl?.setValidators([Validators.required]);
  }

  usernameControl?.updateValueAndValidity();
}

// Inside your component class


// A getter for the skills FormArray
get skillsFormArray(): FormArray {
  return this.myreactiveform.get('skills') as FormArray;
}

}

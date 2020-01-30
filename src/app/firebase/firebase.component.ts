import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { HttpService } from '../http.service';
import { IUser } from './iuser';
import { Router } from '@angular/router';



@Component({
  selector: 'app-firebase',
  templateUrl: './firebase.component.html',
  styleUrls: ['./firebase.component.css']
})
export class FirebaseComponent implements OnInit {
  minDate = new Date(1970, 0, 1);
  maxDate = new Date(2005, 0, 15);
  registerForm: FormGroup;
  public submit = true;
  userList: IUser[];
  constructor(private Http: HttpService, private router: Router) {}
  ngOnInit() {
    this.registerForm = new FormGroup({
      'email': new FormControl('', [Validators.required, Validators.email]),
      'firstname': new FormControl(null, [Validators.required, Validators.minLength(3)]),
      'lastname': new FormControl(null, Validators.required),
      'birth': new FormControl(null, [Validators.required]),
      'task': new FormArray([], Validators.required)
    });
  }
  
  onAddTask() {
    const controls = new FormControl(null, (Validators.required));
    this.form.push(controls)
  }
  onDeleteTask(index) {
   this.form.removeAt(index)
  }
  get form(): FormArray {
    return this.registerForm.get('task') as FormArray
  }
  forms(){
    return this.form
  }
  onSubmit(){
    const value = this.registerForm.value
    console.log(value)
    this.Http.addAUserToFirebase(value);
    this.registerForm.reset();
    this.router.navigate(['/database'])
  }


}

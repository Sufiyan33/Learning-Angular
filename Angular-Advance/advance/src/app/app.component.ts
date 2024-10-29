import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RedElementDirective } from './red-element.directive'; 
import { FormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControl, FormGroup, Validator } from '@angular/forms';
import { UsdToInrPipe } from './pipes/usd-to-inr.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RedElementDirective, FormsModule, CommonModule, 
    ReactiveFormsModule, UsdToInrPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Angular Advance Topics';
  today = Date();
  user={
    name:'Sufiyan',
    location: 'India'
  }
  directiveTitle = 'Hello!!! Welcome to directive.';

  userLogin(item:any){
    console.warn(item)
  }

  // Adding basic FormControl
  nameFiled = new FormControl('');
  updateName(){
    this.nameFiled.setValue('Reactive forms');
  }

  // Adding Group form Control 
  // Now lets apply validations
  profileForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(5)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(5)]),
    password: new FormControl('', [Validators.required, Validators.min(2)])
  })

  profileLoginFrom(){
    console.warn(this.profileForm.value);
  }

  // create getter to get value in html file.
  get firstNameValidator(){
    return this.profileForm.get('firstName')
  }

  get lastNameValidator(){
    return this.profileForm.get('lastName')
  }

  get passwordValidator(){
    return this.profileForm.get('password')
  }
}

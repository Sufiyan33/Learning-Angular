import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RedElementDirective } from './red-element.directive'; 
import { FormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControl, FormGroup, Validator } from '@angular/forms';
import { UsdToInrPipe } from './pipes/usd-to-inr.pipe';
import { RouterLink } from '@angular/router';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { AboutUserComponent } from './about-user/about-user.component';
import { AboutuserlistComponent } from './aboutuserlist/aboutuserlist.component';
import { UserDataService } from './services/user-data.service';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RedElementDirective, FormsModule, CommonModule, 
    ReactiveFormsModule, UsdToInrPipe, RouterLink, NoPageFoundComponent, AboutUserComponent,
    AboutuserlistComponent, FooterComponent],
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

  // Accessing data from service class
  dataForUser: any[]=[];
  constructor(private usersData: UserDataService){
    console.warn("User Data:: ", usersData.usersAllData())
    this.dataForUser=usersData.usersAllData();
  }
}

import { Component } from '@angular/core';
import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  dataForUser: any[]=[];
  constructor(private usersData: UserDataService){
    console.warn("User Data:: ", usersData.usersAllData())
    this.dataForUser=usersData.usersAllData();
  }
}

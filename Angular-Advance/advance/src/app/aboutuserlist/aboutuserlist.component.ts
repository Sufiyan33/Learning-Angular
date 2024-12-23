import { Component } from '@angular/core';
import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-aboutuserlist',
  standalone: true,
  imports: [],
  templateUrl: './aboutuserlist.component.html',
  styleUrl: './aboutuserlist.component.scss'
})
export class AboutuserlistComponent {

  currentdRole: string = '';
  beharviourRole: string = '';

  constructor(private userService: UserDataService){
    this.userService.onRoleChange$.subscribe((role: any)=>{
      this.currentdRole = role;
    });

    this.userService.role$.subscribe((role: any) => {
      this.beharviourRole = role;
    })
  }
}

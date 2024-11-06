import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  // Dynamic routing example:
  textForView:any;
  constructor(private route:ActivatedRoute){}
  ngOnInit():void{
    console.warn("user id is: ", this.route.snapshot.paramMap.get('id'));
  }
}

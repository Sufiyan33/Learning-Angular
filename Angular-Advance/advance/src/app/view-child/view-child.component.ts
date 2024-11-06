import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-view-child',
  standalone: true,
  imports: [],
  templateUrl: './view-child.component.html',
  styleUrl: './view-child.component.scss'
})
export class ViewChildComponent implements AfterViewInit{
  @ViewChild('txt') textBoxed?: ElementRef;
  @ViewChild(UserComponent) textFromUser?: UserComponent;

  ngAfterViewInit(): void {
    const value = this.textBoxed?.nativeElement.value;
    const userText = this.textFromUser?.textForView;
  }
}

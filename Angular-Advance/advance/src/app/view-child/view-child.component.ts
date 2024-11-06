import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-view-child',
  standalone: true,
  imports: [],
  templateUrl: './view-child.component.html',
  styleUrl: './view-child.component.scss'
})
export class ViewChildComponent implements AfterViewInit{
  @ViewChild('txt') textBoxed?: ElementRef;

  ngAfterViewInit(): void {
    const value = this.textBoxed?.nativeElement.value;
  }
}

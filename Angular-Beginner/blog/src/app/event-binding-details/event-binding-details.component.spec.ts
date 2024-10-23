import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventBindingDetailsComponent } from './event-binding-details.component';

describe('EventBindingDetailsComponent', () => {
  let component: EventBindingDetailsComponent;
  let fixture: ComponentFixture<EventBindingDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventBindingDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventBindingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

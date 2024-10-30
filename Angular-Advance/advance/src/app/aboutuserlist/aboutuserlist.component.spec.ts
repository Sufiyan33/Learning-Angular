import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutuserlistComponent } from './aboutuserlist.component';

describe('AboutuserlistComponent', () => {
  let component: AboutuserlistComponent;
  let fixture: ComponentFixture<AboutuserlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutuserlistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutuserlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

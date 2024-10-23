import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwobindingSizerComponent } from './twobinding-sizer.component';

describe('TwobindingSizerComponent', () => {
  let component: TwobindingSizerComponent;
  let fixture: ComponentFixture<TwobindingSizerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwobindingSizerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwobindingSizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

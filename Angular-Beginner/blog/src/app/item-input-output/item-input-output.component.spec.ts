import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemInputOutputComponent } from './item-input-output.component';

describe('ItemInputOutputComponent', () => {
  let component: ItemInputOutputComponent;
  let fixture: ComponentFixture<ItemInputOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemInputOutputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemInputOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleBubbleComponent } from './circle-bubble.component';

describe('CircleBubbleComponent', () => {
  let component: CircleBubbleComponent;
  let fixture: ComponentFixture<CircleBubbleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CircleBubbleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CircleBubbleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

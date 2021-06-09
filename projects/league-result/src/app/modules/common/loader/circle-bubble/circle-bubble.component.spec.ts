import { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';

import { CircleBubbleComponent } from './circle-bubble.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('CircleBubbleComponent', () => {
  let component: CircleBubbleComponent;
  let fixture: ComponentFixture<CircleBubbleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CircleBubbleComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CircleBubbleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create CircleBubbleComponent', () => {
    expect(component).toBeTruthy();
  });
});

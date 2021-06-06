import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultSystemComponent } from './result-system.component';

describe('ResultSystemComponent', () => {
  let component: ResultSystemComponent;
  let fixture: ComponentFixture<ResultSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultSystemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultFormComponent } from './result-form.component';

describe('ResultFormComponent', () => {
  let component: ResultFormComponent;
  let fixture: ComponentFixture<ResultFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

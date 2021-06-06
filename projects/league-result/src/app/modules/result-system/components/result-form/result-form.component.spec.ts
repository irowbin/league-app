import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultFormComponent } from './result-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ResultSystemService} from "@modules/common";

describe('ResultFormComponent', () => {
  let component: ResultFormComponent;
  let fixture: ComponentFixture<ResultFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultFormComponent ],
      imports: [FormsModule, ReactiveFormsModule],
      providers: [ResultSystemService]
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

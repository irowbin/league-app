import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';

import { ResultFormComponent } from './result-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResultSystemService } from '@modules/common';
import { LeagueDataHandlerService } from '@modules/result-system/handlers/league-data-handler.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('ResultFormComponent', () => {
  let component: ResultFormComponent;
  let fixture: ComponentFixture<ResultFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResultFormComponent],
      imports: [FormsModule, ReactiveFormsModule],
      providers: [ResultSystemService, LeagueDataHandlerService],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
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

import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';

import { ResultPreviewComponent } from './result-preview.component';
import { LeagueDataHandlerService } from '@modules/result-system/handlers/league-data-handler.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('ResultPreviewComponent', () => {
  let component: ResultPreviewComponent;
  let fixture: ComponentFixture<ResultPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResultPreviewComponent],
      providers: [LeagueDataHandlerService],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

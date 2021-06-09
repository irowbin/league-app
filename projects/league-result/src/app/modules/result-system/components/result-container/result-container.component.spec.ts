import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';

import { ResultContainerComponent } from './result-container.component';
import { ResultSystemService } from '@modules/common';
import { LeagueDataHandlerService } from '@modules/result-system/handlers/league-data-handler.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('ResultListComponent', () => {
  let component: ResultContainerComponent;
  let fixture: ComponentFixture<ResultContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResultContainerComponent],
      providers: [ResultSystemService, LeagueDataHandlerService],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

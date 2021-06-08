import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueTableComponent } from './league-table.component';
import {LeagueDataHandlerService} from "@modules/result-system/handlers/league-data-handler.service";
import {NO_ERRORS_SCHEMA} from "@angular/core";

describe('LeagueTableComponent', () => {
  let component: LeagueTableComponent;
  let fixture: ComponentFixture<LeagueTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeagueTableComponent ],
      providers: [LeagueDataHandlerService],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeagueTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

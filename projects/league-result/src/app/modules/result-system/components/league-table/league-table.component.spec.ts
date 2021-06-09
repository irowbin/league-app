import { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';

import { LeagueTableComponent } from './league-table.component';
import { LeagueDataHandlerService } from '@modules/result-system/handlers/league-data-handler.service';
import { DebugElement } from '@angular/core';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { findComponent } from '@src/test-util';

describe('LeagueTableComponent', () => {
  let component: LeagueTableComponent;
  let fixture: ComponentFixture<LeagueTableComponent>;
  let de: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeagueTableComponent],
      providers: [LeagueDataHandlerService],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeagueTableComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create LeagueTableComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should contain label text', () => {
    const label = de.query(By.css('.card-header')).nativeElement.innerText;
    expect(label).toBeDefined();
    expect(label.length).toBeGreaterThan(1);
  });
  it('should have selector `demo-simple-table`', () => {
    const table = de.query(By.css('demo-simple-table'));
    expect(table.nativeElement).toBeDefined();
  });

  it('should have input prop values', () => {
    const table = findComponent(fixture, 'demo-simple-table');
    component.tableData = [{ teamName: 'x' }];
    fixture.detectChanges();
    expect(table).toBeTruthy();
    expect(table.properties.dataSource).toEqual([{ teamName: 'x' }]);
    expect(table.properties.columnConfig).toBeDefined();
  });

  it('should define property tableData after leagueData defined', () => {
    component.leagueData = [
      {
        awayTeam: 'x',
        awayTeamScore: 1,
        homeTeam: 'y',
        homeScore: 0,
        uuid: 'xyz',
        date: '09/12/12'
      }
    ];
    component.ngOnChanges();
    expect(component.tableData.length).toBe(2);
  });
});

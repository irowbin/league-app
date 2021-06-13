import { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';

import { LeagueTableComponent } from './league-table.component';
import { LeagueDataHandlerService } from '@modules/result-system/handlers/league-data-handler.service';
import { DebugElement } from '@angular/core';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { findComponent } from '@src/test-util';
import { LeagueChartModel, TeamMatchesModel } from '@modules/common/models';
import { PromiseWorkerEvent } from '@modules/common';

describe('LeagueTableComponent', () => {
  let component: LeagueTableComponent;
  let fixture: ComponentFixture<LeagueTableComponent>;
  let de: DebugElement;
  let handlerService: LeagueDataHandlerService;

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
    handlerService = TestBed.inject(LeagueDataHandlerService);
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
    fixture.changeDetectorRef.markForCheck();
    const table = findComponent(fixture, 'demo-simple-table');
    component.tableData = [{ teamName: 'x' }];
    fixture.detectChanges();
    expect(table).toBeTruthy();
    expect(table.properties.dataSource).toEqual([{ teamName: 'x' }]);
    expect(table.properties.columnConfig).toBeDefined();
  });

  it('should define property tableData after leagueData defined', (done) => {
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
    const mockData: Array<Partial<LeagueChartModel>> = [
      { teamName: 'x' },
      { teamName: 'y' }
    ];
    const mockResult: PromiseWorkerEvent<Array<LeagueChartModel>> = {
      result: mockData as any
    };
    const spiedFn = spyOn(
      handlerService,
      'computeRankingResult'
    ).and.returnValue(Promise.resolve(mockResult));
    component.ngOnChanges();
    spiedFn.calls.mostRecent().returnValue.then((r) => {
      fixture.detectChanges();
      expect(component.tableData.length).toBe(2);
      done();
    });
  });
});

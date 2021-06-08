import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultContainerComponent } from './result-container.component';
import {ResultSystemService} from "@modules/common";
import {LeagueDataHandlerService} from "@modules/result-system/handlers/league-data-handler.service";

describe('ResultListComponent', () => {
  let component: ResultContainerComponent;
  let fixture: ComponentFixture<ResultContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultContainerComponent ],
      providers: [ResultSystemService, LeagueDataHandlerService]
    })
    .compileComponents();
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

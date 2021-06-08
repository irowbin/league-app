import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultPreviewComponent } from './result-preview.component';
import {LeagueDataHandlerService} from "@modules/result-system/handlers/league-data-handler.service";

describe('ResultPreviewComponent', () => {
  let component: ResultPreviewComponent;
  let fixture: ComponentFixture<ResultPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultPreviewComponent ],
      providers: [LeagueDataHandlerService]
    })
    .compileComponents();
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

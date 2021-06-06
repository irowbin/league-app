import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultContainerComponent } from './result-container.component';
import {ResultSystemService} from "@modules/common";

describe('ResultListComponent', () => {
  let component: ResultContainerComponent;
  let fixture: ComponentFixture<ResultContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultContainerComponent ],
      providers: [ResultSystemService]
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

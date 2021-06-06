import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultContainerComponent } from './result-container.component';

describe('ResultListComponent', () => {
  let component: ResultContainerComponent;
  let fixture: ComponentFixture<ResultContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultContainerComponent ]
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

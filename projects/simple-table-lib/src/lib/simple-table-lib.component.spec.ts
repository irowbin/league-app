import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleTableLibComponent } from './simple-table-lib.component';
import {SimpleTableLibService} from "./simple-table-lib.service";

describe('SimpleTableLibComponent', () => {
  let component: SimpleTableLibComponent;
  let fixture: ComponentFixture<SimpleTableLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleTableLibComponent ],
      providers: [SimpleTableLibService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleTableLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

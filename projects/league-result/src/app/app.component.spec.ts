import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { ResultSystemService } from '@modules/common';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
      providers: [ResultSystemService],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
  });

  it('should create the app', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should contain navbar', () => {
    //arrange
    const { debugElement } = fixture;

    // act
    const navbar = debugElement.query(By.css('app-navbar'));

    // assert
    expect(navbar).toBeTruthy();
  });

  it('should contain router-outlet', () => {
    //arrange
    const { debugElement } = fixture;
    // act
    const navbar = debugElement.query(By.css('router-outlet'));
    // assert
    expect(navbar).toBeTruthy();
  });
});

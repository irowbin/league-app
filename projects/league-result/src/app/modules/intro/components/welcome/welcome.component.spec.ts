import {ComponentFixture, TestBed} from '@angular/core/testing';

import {WelcomeComponent} from './welcome.component';
import {DebugElement, NO_ERRORS_SCHEMA} from "@angular/core";
import {findComponent} from "@src/test-util";

describe('WelcomeComponent', () => {
  let component: WelcomeComponent;
  let fixture: ComponentFixture<WelcomeComponent>;
  let de: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WelcomeComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create WelcomeComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should have anchor tag with link text', () => {
    const anchorTag = findComponent(fixture, 'a');
    expect(anchorTag).toBeDefined();
    expect(anchorTag.nativeElement.innerText.length).toBeGreaterThan(1);
  });

  it('should have anchor tag with router link value `/result-system` ', () => {
    const anchorTag = findComponent(fixture, 'a');
    expect(anchorTag).toBeDefined();
    expect(anchorTag.attributes.routerLink).toBe('/result-system');
  });

});

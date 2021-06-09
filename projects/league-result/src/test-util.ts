import type { ComponentFixture } from '@angular/core/testing';
import type { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

export function findComponent<T>(
  fixture: ComponentFixture<T>,
  selector: string,
): DebugElement {
  return fixture.debugElement.query(By.css(selector));
}

import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';
import { SimpleTableLibComponent } from './simple-table-lib.component';
import { By } from '@angular/platform-browser';
import type { DebugElement } from '@angular/core';

describe('SimpleTableLibComponent', () => {
  let component: SimpleTableLibComponent;
  let fixture: ComponentFixture<SimpleTableLibComponent>;
  let de: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SimpleTableLibComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleTableLibComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create `SimpleTableLibComponent` instance', () => {
    expect(component).toBeTruthy();
  });

  it('should should have html table element', () => {
    const table = de.query(By.css('table'));
    expect(table).toBeTruthy();
  });

  it('should render row data to the table', () => {
    // arrange
    component.dataSource = [{ x: 'y' }];
    component.columnConfig = [{ dataField: 'x', caption: 'x' }];
    // act
    fixture.detectChanges();
    const thead = de.query(By.css('thead'));
    const tbody = de.query(By.css('tbody'));
    // assert
    expect(thead.queryAll(By.css('th')).length).toBe(1);
    expect(tbody.queryAll(By.css('tr')).length).toBe(1);
    expect(tbody.queryAll(By.css('tr td')).length).toBe(1);
  });

  it('should render row number with index increment', () => {
    // arrange
    component.dataSource = [{ x: 'y' }];
    component.columnConfig = [{ dataField: 'x', caption: 'x' }];
    component.showRowNumber = true;

    // act
    component.ngOnChanges();
    fixture.detectChanges();

    const thead = de.query(By.css('thead'));
    const tbody = de.query(By.css('tbody'));
    // assert
    expect(thead.queryAll(By.css('th'))[0].nativeElement.innerText).toBe('#');
    expect(thead.queryAll(By.css('th')).length).toBe(2);
    expect(tbody.queryAll(By.css('tr')).length).toBe(1);
    expect(tbody.queryAll(By.css('tr td'))[0].nativeElement.innerText).toBe(
      '1',
    );
    expect(tbody.queryAll(By.css('tr td')).length).toBe(2);
  });

  it('should apply css class to the table element', () => {
    const css = 'some-css-class';
    component.tableClass = css;
    fixture.detectChanges();

    const table = de.query(By.css('table')).nativeElement as HTMLTableElement;
    expect(table.classList.contains(css)).toBeTruthy();
  });

  it('should apply css class to the thead th cell element', () => {
    const css = 'some-css-class';
    component.headerCellClass = css;
    component.columnConfig = [{ dataField: 'x', caption: 'y' }];
    fixture.detectChanges();

    const th = de.query(By.css('table thead th'))
      .nativeElement as HTMLTableHeaderCellElement;
    expect(th.classList.contains(css)).toBeTruthy();
  });

  it('should apply css class to the tbody tr element', () => {
    const css = 'some-css-class';
    component.rowClass = css;
    component.dataSource = [{ x: 'y' }];
    fixture.detectChanges();
    const row = de.query(By.css('table tbody tr'))
      .nativeElement as HTMLTableRowElement;
    expect(row.classList.contains(css)).toBeTruthy();
  });

  it('should apply css class to the tbody td cell element', () => {
    const css = 'some-css-class';
    component.cellClass = css;
    component.dataSource = [{ x: 'y' }];
    component.columnConfig = [{ caption: 'x', dataField: 'x' }];
    fixture.detectChanges();
    const cell = de.query(By.css('table tbody tr td'))
      .nativeElement as HTMLTableCellElement;
    expect(cell.classList.contains(css)).toBeTruthy();
  });
});

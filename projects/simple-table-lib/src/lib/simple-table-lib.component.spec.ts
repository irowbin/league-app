import {ComponentFixture, TestBed} from '@angular/core/testing';
import {SimpleTableLibComponent} from './simple-table-lib.component';
import {By} from "@angular/platform-browser";

describe('SimpleTableLibComponent', () => {
  let component: SimpleTableLibComponent;
  let fixture: ComponentFixture<SimpleTableLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SimpleTableLibComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleTableLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create `SimpleTableLibComponent` instance', () => {
    expect(component).toBeTruthy();
  });

  it('should should have html table element', () => {
    const {debugElement} = fixture
    const table = debugElement.query(By.css('table'));
    expect(table).toBeTruthy();
  });

  it('should render row data to the table', () => {
    // arrange
    component.dataSource = [{x: 'y'}];
    component.columnConfig = [{dataField: 'x', caption: 'x'}];
    // act
    fixture.detectChanges();
    const {debugElement} = fixture;
    const thead = debugElement.query(By.css('thead'))
    const tbody = debugElement.query(By.css('tbody'));
    // assert
    expect(thead.queryAll(By.css('th')).length).toBe(1);
    expect(tbody.queryAll(By.css('tr')).length).toBe(1);
    expect(tbody.queryAll(By.css('tr td')).length).toBe(1);
  });

  it('should render row number with index increment',  () => {
    // arrange
    component.dataSource = [{x: 'y'}];
    component.columnConfig = [{dataField: '#', caption: '#'}, {dataField: 'x', caption: 'x'}];
    component.showRowNumber = true;
    // act
    fixture.detectChanges();
    const {debugElement} = fixture;
    const thead = debugElement.query(By.css('thead'))
    const tbody = debugElement.query(By.css('tbody'));
    // assert
    expect(thead.queryAll(By.css('th'))[0].nativeElement.innerText).toBe('#');
    expect(thead.queryAll(By.css('th')).length).toBe(2);
    expect(tbody.queryAll(By.css('tr')).length).toBe(1);
    expect(tbody.queryAll(By.css('tr td'))[0].nativeElement.innerText).toBe('1');
    expect(tbody.queryAll(By.css('tr td')).length).toBe(2);
  });

  it('should apply css class to the table element', () => {
    const css = 'some-css-class';
    component.tableClass = css;
    fixture.detectChanges();
    const {debugElement} = fixture;
    const table = debugElement.query(By.css('table')).nativeElement as HTMLTableElement;
    expect(table.classList.contains(css)).toBeTruthy();
  });

});

import { AfterViewInit, Type } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-result-system',
  templateUrl: './result-system.component.html',
  styleUrls: ['./result-system.component.scss']
})
export class ResultSystemComponent implements AfterViewInit {
  /**
   * Loads a lazy chunk of `ResultContainerComponent` when this page get rendered.
   */
  resultContainer: Promise<Type<any>>;

  ngAfterViewInit(): void {
    setTimeout(() => this.initLazyComp(), 500);
  }

  /**
   * Initialize lazy chunk of `ResultContainerComponent` where other conditional
   * components are toggled based on toolbar changes.
   */
  private initLazyComp(): void {
    this.resultContainer = import(
      '../components/result-container/result-container.component'
    ).then(({ ResultContainerComponent }) => ResultContainerComponent);

    // TODO: maybe more lazy component to render later
  }
}

import {AfterViewInit, OnChanges} from '@angular/core';
import {Component, EventEmitter, Input, Output} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  ValidatorFn
} from '@angular/forms';
import {Validators} from '@angular/forms';
import {ResultSystemService} from '@app/modules/common';
import {TeamMatchesModel} from '@app/modules/common/models';
import {ResultSystemBase} from '@modules/result-system/result-system.base';
import {debounceTime, takeUntil} from 'rxjs/operators';
import {UuidGenerator} from '@modules/common/utils/uuid-generator';
import {LeagueDataHandlerService} from '@modules/result-system/handlers/league-data-handler.service';

@Component({
  selector: 'app-result-form',
  templateUrl: './result-form.component.html',
  styleUrls: ['./result-form.component.scss']
})
export class ResultFormComponent extends ResultSystemBase
  implements OnChanges, AfterViewInit {
  resultForm: FormGroup;
  /**
   * Retrieves form value from the parent and patches it.
   */
  @Input()
  patchTeamValue: TeamMatchesModel;

  /**
   * Notify to the parent whether the form submission is done.
   */
  @Output()
  readonly submitted = new EventEmitter<boolean>();

  /**
   * k/v error that are extracted from the abstract control error which are
   * mapped during form value changes.
   * key contains name of the form control and the value is the error object
   * returned by control.
   */
  errors: { [kay: string]: any } = {};

  constructor(
    private fb: FormBuilder,
    private resultService: ResultSystemService,
    public handlerService: LeagueDataHandlerService
  ) {
    super(handlerService);
    this.initForm();
  }

  private static toggleDateFormat(
    date: string,
    format: 'US' | 'HTML5'
  ): string {
    let formatted = '';
    switch (format) {
      case 'US': {
        // html5 date picker gives us default format as yyyy-mm-dd value.
        const d = date.split('-').reverse();
        // format date US standard
        formatted = `${d[1]}/${d[0]}/${d[2]}`;
      }
        break;
      case 'HTML5': {
        const d = date.split('/');
        // make date value readable by html5 input.
        formatted = `${d[2]}-${d[0]}-${d[1]}`;
      }
        break;
    }
    return formatted;
  }

  ngOnChanges(): void {
    if (this.patchTeamValue) {
      this.resultForm.patchValue({
        ...this.patchTeamValue,
        date: ResultFormComponent.toggleDateFormat(
          this.patchTeamValue.date,
          'HTML5'
        )
      });
    }
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
  }

  ngAfterViewInit(): void {
    this.handleFormValidation();
  }

  /**
   * Populate errors state returned by abstract control during angular validation.
   */
  private handleFormValidation(): void {
    const keys = Object.keys(this.resultForm.value);
    this.resultForm.valueChanges
      .pipe(debounceTime(200), takeUntil(this.toDestroy$))
      .subscribe({
        next: () => {
          // take error references if found so we can display it in the UI
          this.errors = keys.reduce((accum, key) => {
            accum[key] =
              this.resultForm.get(key).touched &&
              this.resultForm.get(key).dirty &&
              this.resultForm.get(key).errors;
            return accum;
          }, {});
        }
      });
  }

  /**
   *  value comparer validation fn.
   *  TODO: maybe make a directive so we can use in the UI directly.
   * @param propName compare against self with provided prop name.
   */
  private compareValue(propName: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.parent) return null;
      const value = (control.value || '').trim().toLowerCase();
      const compareToValue = (control.parent.get(propName)?.value || '')
        .trim()
        .toLowerCase();

      // they both need to define so we can run compare.
      if (!(value || compareToValue)) return null;

      return value === compareToValue ? {match: true} : null;
    };
  }

  private initForm(): void {
    this.resultForm = this.fb.group({
      uuid: new UuidGenerator()._uuid,
      date: ['', [Validators.required]],
      homeTeam: [
        '',
        [Validators.required, this.compareValue('awayTeam')]
      ],
      homeScore: [0, [Validators.min(0), Validators.required]],
      awayTeam: [
        '',
        [Validators.required, this.compareValue('homeTeam')]
      ],
      awayTeamScore: [0, [Validators.min(0), Validators.required]]
    });
  }

  /**
   * if user clicks submit without making any changes,
   * we need to update the control validation status
   * so they can be shown in the UI.
   */
  private propagateChangedState(): void {
    Object.keys(this.resultForm.value).forEach((key) => {
      const ctrl = this.resultForm.get(key);
      ctrl.markAllAsTouched();
      ctrl.markAsDirty();
      ctrl.updateValueAndValidity();
    });
  }

  saveChanges(): void {
    if (this.resultForm.pristine || !this.resultForm.valid) {
      this.propagateChangedState();
      return;
    }

    const payload = this.resultForm.value as TeamMatchesModel;
    // format date US standard
    payload.date = ResultFormComponent.toggleDateFormat(payload.date, 'US');

    // once the update is done, notify to the parent.
    this.resultService
      .addOrUpdateLeague(this.resultForm.value)
      .pipe(takeUntil(this.toDestroy$))
      .subscribe((status) => this.submitted.emit(status));
  }
}

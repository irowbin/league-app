import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ResultSystemService} from '@app/modules/common';
import {TeamMatchesModel} from '@app/modules/common/models';
import {ResultSystemBase} from "@modules/result-system/result-system.base";
import {takeUntil} from "rxjs/operators";
import {UuidGenerator} from "@modules/common/utils/uuid-generator";
import {LeagueDataHandlerService} from "@modules/result-system/handlers/league-data-handler.service";

@Component({
  selector: 'app-result-form',
  templateUrl: './result-form.component.html',
  styleUrls: ['./result-form.component.scss']
})
export class ResultFormComponent extends ResultSystemBase implements OnChanges {
  resultForm: FormGroup
  /**
   * Retrieves form value from the parent and patches it.
   */
  @Input()
  patchTeamValue: TeamMatchesModel

  /**
   * Notify to the parent whether the form submission is done.
   */
  @Output()
  readonly submitted = new EventEmitter<boolean>()

  /**
   * Whether the form is invalid.
   */
  invalidForm: boolean

  constructor(private fb: FormBuilder,
              private resultService: ResultSystemService,
              public handlerService: LeagueDataHandlerService) {
    super(handlerService);
    this.initForm();
  }

  private static toggleDateFormat(date: string, format: 'US' | 'HTML5'): string {
    let formatted = ''
    switch (format) {
      case 'US': {
        // html5 date picker gives us default format as yyyy-mm-dd value.
        const d = date.split('-').reverse()
        // format date US standard
        formatted = `${d[1]}/${d[0]}/${d[2]}`
      }
        break;
      case 'HTML5': {
        const d = date.split('/')
        // make date value readable by html5 input.
        formatted = `${d[2]}-${d[0]}-${d[1]}`
      }
        break;
    }
    return formatted
  }

  ngOnChanges(): void {
    if (this.patchTeamValue) {
      this.resultForm.patchValue({
        ...this.patchTeamValue,
        date: ResultFormComponent.toggleDateFormat(this.patchTeamValue.date, 'HTML5')
      })
    }
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
  }

  private initForm(): void {
    this.resultForm = this.fb.group({
      uuid: new UuidGenerator()._uuid,
      date: ['', [Validators.required]],
      homeTeam: ['', [Validators.required]],
      homeScore: [0, [Validators.min(0), Validators.required]],
      awayTeam: '',
      awayTeamScore: [0, [Validators.min(0), Validators.required]]
    });
  }

  saveChanges(): void {
    const payload = this.resultForm.value as TeamMatchesModel
    // format date US standard
    payload.date = ResultFormComponent.toggleDateFormat(payload.date, 'US')

    this.invalidForm = false
    if (!this.resultForm.valid) {
      this.invalidForm = true;
      return;
    }
    // once the update is done, notify to the parent.
    this.resultService.addOrUpdateLeague(this.resultForm.value)
      .pipe(takeUntil(this.toDestroy$))
      .subscribe(status => this.submitted.emit(status))
  }
}

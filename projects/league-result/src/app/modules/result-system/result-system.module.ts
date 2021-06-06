import {NgModule} from "@angular/core";
import {ResultSystemComponent} from "./pages/result-system.component";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {ResultContainerComponent} from './components/result-container/result-container.component';
import {ToolbarComponent} from './components/toolbar/toolbar.component';
import {ResultPreviewComponent} from './components/result-preview/result-preview.component';
import {ResultFormComponent} from './components/result-form/result-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LeagueTableModule} from "./components/league-table/league-table.module";
import { LoaderModule } from "../common";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: ResultSystemComponent}
    ]),
    LoaderModule,
    LeagueTableModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    ResultSystemComponent,
    ResultContainerComponent,
    ToolbarComponent,
    ResultPreviewComponent,
    ResultFormComponent
  ]
})
export class ResultSystemModule {
}

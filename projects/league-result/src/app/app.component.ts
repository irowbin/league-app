import {Component} from '@angular/core';
import {fadeInOut} from "@modules/common/animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeInOut]
})
export class AppComponent {
}

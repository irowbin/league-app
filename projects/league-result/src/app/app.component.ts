import {AfterViewInit, Component} from '@angular/core';
import {fadeInOut} from "@modules/common/animations";
import {socket} from "@modules/common/socket/socket-io.extension";
import {TeamMatchesModel} from "@modules/common/models";
import {ResultSystemService} from "@modules/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeInOut]
})
export class AppComponent implements AfterViewInit {
  constructor(private readonly leagueService: ResultSystemService) {
  }

  ngAfterViewInit(): void {
    // we are going to sync league data to connected  clients.
    socket.on('connect', () => {
      console.log('connected')
      // when an employee get deleted
      socket.on('LEAGUE_SYNCED', (leagueData: Array<TeamMatchesModel>) => {
        this.leagueService.syncStorageData = leagueData
      });
    });
  }
}

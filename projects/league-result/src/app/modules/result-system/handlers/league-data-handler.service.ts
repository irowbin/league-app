import {
  ChartValueType,
  LeagueChartModel,
  TeamMatchesModel
} from '@app/modules/common/models';
import {Injectable} from '@angular/core';
import {PromiseWorkerJob, PromiseWorker, PromiseWorkerEvent} from "@modules/common/utils/inline-worker";

@Injectable()
export class LeagueDataHandlerService {
  computeRankingResult(
    matchPayload: Array<TeamMatchesModel>
  ): Promise<PromiseWorkerEvent<Array<LeagueChartModel>>> {
    const promiseWorker = new PromiseWorker();

    const chartJob: PromiseWorkerJob<Array<TeamMatchesModel>, Array<LeagueChartModel>> = new PromiseWorkerJob((args) => {
      // initial result value
      const initialValue = {
        teamName: '',
        played: 0,
        won: 0,
        lost: 0,
        drawn: 0,
        goalsScored: 0,
        goalsAgainst: 0
      };

      // calculate match results
      const matchResult = (
        leagueChart: ChartValueType,
        match: TeamMatchesModel
      ) => {
        const {homeTeam, awayTeam, homeScore, awayTeamScore} = match;

        const homeTeamObj = leagueChart[homeTeam];
        const awayTeamObj = leagueChart[awayTeam];

        if (homeScore > awayTeamScore) {
          // home team won this
          homeTeamObj.won++;
          // away team lost it
          awayTeamObj.lost++;
        } else if (homeScore < awayTeamScore) {
          // home team lost it
          homeTeamObj.lost++;
          // away team won it
          awayTeamObj.won++;
        } else {
          // otherwise its draw game
          homeTeamObj.drawn++;
          awayTeamObj.drawn++;
        }
      };

      // calculate goals
      const goals = (
        leagueChart: ChartValueType,
        teamName: string,
        scored: number,
        against: number
      ): void => {
        leagueChart[teamName].goalsScored += scored;
        leagueChart[teamName].goalsAgainst += against;
      };

      const calculated = args.reduce((leagueChart, match) => {
        const {homeTeam, awayTeam} = match;

        // init team with default initialValue for teams.
        if (!leagueChart[homeTeam]) {
          leagueChart[homeTeam] = {...initialValue};
        }
        if (!leagueChart[awayTeam]) {
          leagueChart[awayTeam] = {...initialValue};
        }

        // increase the played counter of home & away teams.
        [homeTeam, awayTeam].forEach(
          (teamName) => leagueChart[teamName].played++
        );

        // calculate teams won,los & drawn scores.
        matchResult(leagueChart, match);

        // calculate scored and against goals  of home / away teams.
        goals(leagueChart, homeTeam, match.homeScore, match.awayTeamScore);
        goals(leagueChart, awayTeam, match.awayTeamScore, match.homeScore);

        return leagueChart;
      }, {} as ChartValueType);

      // Sort by highest played score
      const result: Array<LeagueChartModel> = Object.keys(calculated)
        .map((teamName) => ({...calculated[teamName], teamName} as LeagueChartModel))
        .sort((a, b) => b.goalsScored - a.goalsScored);
      return Promise.resolve(result);
    }, matchPayload);

    // run an async task inside worker thread.
    return promiseWorker.runTaskOf<Array<LeagueChartModel>>(chartJob)
  }

  computeViewResults(
    matchPayload: Array<TeamMatchesModel>
  ): Promise<PromiseWorkerEvent<Array<{ key: string; value: Array<TeamMatchesModel> }>>> {
    const promiseWorker = new PromiseWorker();

    const viewJob: PromiseWorkerJob<Array<TeamMatchesModel>, Array<{ key: string; value: Array<TeamMatchesModel> }>> = new PromiseWorkerJob((args) => {

      // unique dates
      const dates = [...new Set(args.map((m) => m.date))];
      const result = dates
        .sort((a, b) => (b > a ? 1 : -1))
        .reduce((results, date) => {
          const matches = args.filter((m) => m.date === date);
          results.push({
            key: date,
            value: matches
          });
          return results;
        }, []);
      return Promise.resolve(result)
    }, matchPayload)

    // runs a background job and returns result as generic type.
    return promiseWorker.runTaskOf<Array<{ key: string; value: Array<TeamMatchesModel> }>>(viewJob)
  }
}

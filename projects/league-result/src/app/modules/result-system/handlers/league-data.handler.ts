import {ChartValueType, LeagueChartModel, TeamMatchesModel} from "@app/modules/common/models";

export abstract class LeagueDataHandler {
  computeRankingResult(matchPayload: Array<TeamMatchesModel>): Array< Partial<LeagueChartModel>> {
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
    const matchResult = (leagueChart: ChartValueType, match: TeamMatchesModel) => {
      const {
        homeTeam, awayTeam, homeScore, awayTeamScore
      } = match;

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
    }

    // calculate goals
    const goals = (leagueChart: ChartValueType, teamName: string, scored: number, against: number): void => {
      leagueChart[teamName].goalsScored += scored;
      leagueChart[teamName].goalsAgainst += against;
    }

    const calculated = matchPayload.reduce((leagueChart, match) => {
      const {homeTeam, awayTeam} = match;

      // init team with default initialValue for teams.
      if (!leagueChart[homeTeam]) {
        leagueChart[homeTeam] = {...initialValue};
      }
      if (!leagueChart[awayTeam]) {
        leagueChart[awayTeam] = {...initialValue};
      }

      // increase the played counter of home & away teams.
      [homeTeam, awayTeam].forEach(teamName => leagueChart[teamName].played++);

      // calculate teams won,los & drawn scores.
      matchResult(leagueChart, match);

      // calculate scored and against goals  of home / away teams.
      goals(leagueChart, homeTeam, match.homeScore, match.awayTeamScore);
      goals(leagueChart, awayTeam, match.awayTeamScore, match.homeScore);

      return leagueChart
    }, {} as ChartValueType);

    // Sort by highest played score
    return Object.keys(calculated)
      .map(teamName => ({...calculated[teamName], teamName}))
      .sort((a, b) =>
        b.goalsScored - a.goalsScored)
  }

  computeViewResults(matchPayload: Array<TeamMatchesModel>): Array<{ key: string; value: Array<TeamMatchesModel> }> {
    // unique dates
    const dates = [...new Set(matchPayload.map(m=>m.date))]
    return dates
      .sort((a,b) => b > a ? 1 : -1)
      .reduce((results, date) => {
        const matches = matchPayload.filter(m=>m.date === date)
        results.push({
          key: date,
          value: matches
        })
        return results
      },[]);
  }

}

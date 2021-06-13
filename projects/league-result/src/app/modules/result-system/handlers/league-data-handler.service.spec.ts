import { LeagueDataHandlerService } from '@modules/result-system/handlers/league-data-handler.service';
import { TeamMatchesModel } from '@modules/common/models';

describe('LeagueDataHandlerService', () => {
  let service: LeagueDataHandlerService;
  let mockData: Array<TeamMatchesModel>;
  const teamW = 'teamW';
  const teamX = 'teamX';
  const teamY = 'teamY';
  const teamZ = 'teamZ';
  beforeEach(() => {
    service = new LeagueDataHandlerService();
    mockData = [
      {
        homeTeam: teamW,
        homeScore: 1,
        awayTeam: teamX,
        awayTeamScore: 2,
        uuid: 'xyz',
        date: '09/20/2021'
      },
      {
        homeTeam: teamY,
        homeScore: 2,
        awayTeam: teamZ,
        awayTeamScore: 1,
        uuid: 'zyx',
        date: '09/22/2021'
      }
    ];
  });

  it('#computeRankingResult should return valid ranking result', async () => {
    const res = await service.computeRankingResult(mockData);
    expect(res).toBeDefined();
    expect(res.result.length).toBe(4);
  });

  it('#computeViewResults should return valid view result with date desc', async () => {
    const res = await service.computeViewResults(mockData);
    expect(res).toBeDefined();
    expect(res.result.length).toBe(2);
    const sorted = mockData.map((m) => m.date).sort((a, b) => (b > a ? 1 : -1));
    expect(res.result.map((r) => r.key)).toEqual(sorted);
  });

  describe('winner teams', () => {
    [teamX, teamY].forEach((teamName) => {
      it(`should calculate winner '${teamName}'s WON, LOST, PLAYED, DRAWN, POINTS result`, async () => {
        const res = await service.computeRankingResult(mockData);
        expect(res.result).toBeDefined();
        const team = res.result.find((x) => x.teamName === teamName);
        expect(team).toBeDefined();
        expect(team.lost).toBe(0);
        expect(team.played).toBe(1);
        expect(team.won).toBe(1);
        expect(team.drawn).toBe(0);
        expect(team.goalsScored).toBe(2);
      });
    });
  });

  describe('loser teams', () => {
    [teamW, teamZ].forEach((teamName) => {
      it(`should calculate loser '${teamName}'s WON, LOST, PLAYED, DRAWN, POINTS result`, async () => {
        const res = await service.computeRankingResult(mockData);
        expect(res.result).toBeDefined();
        const team = res.result.find((x) => x.teamName === teamName);
        expect(team).toBeDefined();
        expect(team.lost).toBe(1);
        expect(team.played).toBe(1);
        expect(team.won).toBe(0);
        expect(team.drawn).toBe(0);
        expect(team.goalsScored).toBe(1);
      });
    });
  });
});

import {UuidGenerator} from "@modules/common/utils/uuid-generator";
import {TeamMatchesModel} from "@modules/common/models";

const gen = new UuidGenerator()
export const MOCK_DATA: Array<TeamMatchesModel> = [
  {
    uuid: gen.Uuid(),
    date: '09/20/2021',
    homeTeam: 'Aston Villa',
    homeScore: 1,
    awayTeam: 'Arsenal',
    awayTeamScore: 1
  },
  {
    uuid: gen.Uuid(),
    date: '09/20/2021',
    homeTeam: 'Aston Villa',
    homeScore: 1,
    awayTeam: 'Liverpool',
    awayTeamScore: 1
  },
  {
    uuid: gen.Uuid(),
    date: '09/20/2021',
    homeTeam: 'Liverpool',
    homeScore: 1,
    awayTeam: 'Arsenal',
    awayTeamScore: 2
  }
];

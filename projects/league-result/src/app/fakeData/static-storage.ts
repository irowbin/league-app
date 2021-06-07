import {UuidGenerator} from "@modules/common/utils/uuid-generator";
import {TeamMatchesModel} from "@modules/common/models";

const gen = new UuidGenerator()
export const MOCK_DATA: Array<TeamMatchesModel> = [
  {
    uuid: gen._uuid,
    date: '09/20/2021',
    homeTeam: 'Aston Villa',
    homeScore: 1,
    awayTeam: 'Arsenal',
    awayTeamScore: 1
  },
  {
    uuid: gen._uuid,
    date: '09/20/2021',
    homeTeam: 'Aston Villa',
    homeScore: 1,
    awayTeam: 'Liverpool',
    awayTeamScore: 1
  },
  {
    uuid: gen._uuid,
    date: '09/20/2021',
    homeTeam: 'Liverpool',
    homeScore: 1,
    awayTeam: 'Arsenal',
    awayTeamScore: 2
  },
  {
    uuid: gen._uuid,
    date: '09/21/2021',
    homeTeam: 'Man City',
    homeScore: 2,
    awayTeam: 'Chelsea',
    awayTeamScore: 1
  },
  {
    uuid: gen._uuid,
    date: '09/22/2021',
    homeTeam: 'Man City',
    homeScore: 2,
    awayTeam: 'Liverpool',
    awayTeamScore: 1
  },
  {
    uuid: gen._uuid,
    date: '09/23/2021',
    homeTeam: 'Aston Villa',
    homeScore: 1,
    awayTeam: 'Chelsea',
    awayTeamScore: 1
  }
];

/**
 * Game played payload model
 */
export interface TeamMatchesModel {
  /**
   * Item's unique identifier.
   */
  uuid?: string;
  /**
   * Game played date
   */
  date: string;
  /**
   * Home team name
   */
  homeTeam?: string;
  /**
   * Home team score
   */
  homeScore?: number;
  /**
   * Away team name
   */
  awayTeam?: string;
  /**
   * Away team score
   */
  awayTeamScore?: number;
}

/**
 * League chart that represents computed values of game score, won, lost etc.,
 */
export interface LeagueChartModel {
  teamName: string;
  played: number;
  won: number;
  lost: number;
  drawn: number;
  goalsScored: number;
  goalsAgainst: number;
}

/**
 * Dictionary collection of rankings chart where key would be team name and value would
 * an object with computed props values.
 */
export type ChartValueType = { [key: string]: Partial<LeagueChartModel> };

export enum ToolbarTypes {
  'RESULT',
  'NEW_OR_MODIFY',
  'TABLE'
}

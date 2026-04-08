export type HeatMapContributionDataPoint = {
  month: string;
  weekday: string;
  commits: number;
  fill: string;
};

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const contributionPalette = ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'];

const commitPattern = [
  [2, 4, 6, 3, 5, 7, 2],
  [1, 3, 5, 2, 4, 6, 1],
  [4, 6, 9, 5, 7, 10, 3],
  [0, 1, 2, 1, 2, 3, 0],
  [2, 5, 7, 4, 6, 8, 2],
  [3, 6, 8, 5, 7, 9, 3],
  [1, 4, 6, 3, 5, 7, 2],
  [0, 2, 4, 2, 3, 5, 1],
  [0, 1, 2, 1, 2, 3, 0],
  [2, 5, 8, 4, 7, 9, 3],
  [1, 4, 7, 3, 6, 8, 2],
  [0, 2, 5, 2, 4, 6, 1],
];

const getContributionFill = (commits: number): string => {
  if (commits === 0) {
    return contributionPalette[0];
  }
  if (commits <= 3) {
    return contributionPalette[1];
  }
  if (commits <= 6) {
    return contributionPalette[2];
  }
  if (commits <= 8) {
    return contributionPalette[3];
  }

  return contributionPalette[4];
};

export const contributionHeatMapData: ReadonlyArray<HeatMapContributionDataPoint> = months.flatMap(
  (month, monthIndex) =>
    weekdays.map((weekday, weekdayIndex) => {
      const commits = commitPattern[monthIndex][weekdayIndex];

      return {
        month,
        weekday,
        commits,
        fill: getContributionFill(commits),
      };
    }),
);

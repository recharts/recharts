export type CalendarContributionDataPoint = {
  date: string;
  commits: number;
};

function toDateKey(date: Date): string {
  return date.toISOString().slice(0, 10);
}

function addDays(date: Date, days: number): Date {
  const next = new Date(date);
  next.setDate(next.getDate() + days);
  return next;
}

function getCommitValue(date: Date, dayIndex: number): number {
  const monthIntensity = [2, 3, 5, 1, 4, 6, 5, 3, 2, 6, 5, 3][date.getMonth()];
  const weekdayIntensity = [3, 4, 5, 4, 5, 6, 2][(date.getDay() + 6) % 7];
  const wave = (dayIndex * 7 + date.getMonth() * 11) % 9;

  if ((dayIndex + date.getMonth()) % 13 === 0) {
    return 0;
  }

  return Math.max(monthIntensity + weekdayIntensity + wave - 4, 0);
}

const start = new Date(2025, 0, 1);
const end = new Date(2025, 11, 31);

export const calendarContributionData: ReadonlyArray<CalendarContributionDataPoint> = Array.from(
  { length: Math.floor((end.getTime() - start.getTime()) / 86400000) + 1 },
  (_value, index) => {
    const date = addDays(start, index);

    return {
      date: toDateKey(date),
      commits: getCommitValue(date, index),
    };
  },
);

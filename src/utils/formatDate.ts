// Dates in front matter (e.g. 2026-09-01) are parsed as UTC midnight,
// so format in UTC to avoid showing the previous day.
export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
}

/**
 * The `timeSince` function calculates the time difference between a given date and the current date,
 * and returns the result in years, months, days, hours, minutes, or seconds.
 * @param {Date} date - The `date` parameter is a `Date` object representing a specific point in time.
 * It is the reference date for calculating the time difference between the current date and the
 * provided date.
 * @returns a string representing the time elapsed since the given date. The string includes the number
 * of years, months, days, hours, minutes, or seconds depending on the interval of time.
 */
export function timeSince(date: Date) {
  const now = new Date();
  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  let interval = Math.floor(seconds / 31536000);

  if (interval > 1) {
    return interval + " years";
  }
  interval = Math.floor(seconds / 2592000);
  if (interval > 1) {
    return interval + " months";
  }
  interval = Math.floor(seconds / 86400);
  if (interval > 1) {
    return interval + " days";
  }
  interval = Math.floor(seconds / 3600);
  if (interval > 1) {
    return interval + " hours";
  }
  interval = Math.floor(seconds / 60);
  if (interval > 1) {
    return interval + " minutes";
  }
  return Math.floor(seconds) + " seconds";
}

/*
Returns number larger than 999 in the "k" format, e.g.

1500 = 1.5k
6380 = 6.3k
11000 = 11k
35200 = 35.2k
22699 = 22.6k
500000 = 500k
*/

export function formatLargeNumber(num: number): string {
  const numAsString = num.toString();

  if (num >= 1000) {
    const formatted = (num / 1000).toFixed(3).slice(0, -2);
    const lastDigitIsZero = formatted[formatted.length - 1] === '0';

    return lastDigitIsZero ? formatted.slice(0, -2) + 'k' : formatted + 'k';
  }

  return numAsString;
}

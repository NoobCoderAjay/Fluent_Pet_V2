import moment from 'moment';

/**
 * Converts date in "YYYY-MM-DD" format to JS Date object
 *
 * @param {String} date
 * @returns {Date}
 */

export const offsetDateForLocalTz = (date: string) => {
  const dateObject = new Date(date);
  const offsetInMinutes = dateObject.getTimezoneOffset();

  const offsetDate = moment(dateObject)
    .add(offsetInMinutes, 'minutes')
    .format();

  return new Date(offsetDate);
};

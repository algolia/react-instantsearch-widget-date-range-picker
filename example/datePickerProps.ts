// https://github.com/duetds/date-picker
export const datePickerProps = {
  dateAdapter: {
    parse(dateString: string) {
      const [dayStr, monthStr, yearStr] = dateString.split('/');
      const validInput =
        dayStr &&
        dayStr.length === 2 &&
        monthStr &&
        monthStr.length === 2 &&
        yearStr &&
        yearStr.length === 4;
      if (!validInput) {
        return null;
      }

      const [day, month, year] = dateString
        .split('/')
        .map((s) => parseInt(s, 10));
      return new Date(year, month - 1, day);
    },
    format(date: Date) {
      return new Intl.DateTimeFormat('en-GB').format(date);
    },
  },
  localization: {
    buttonLabel: 'Choose date',
    placeholder: 'DD/MM/YYYY',
    selectedDateMessage: 'Selected date is',
    prevMonthLabel: 'Previous month',
    nextMonthLabel: 'Next month',
    monthSelectLabel: 'Month',
    yearSelectLabel: 'Year',
    closeLabel: 'Close window',
    calendarHeading: 'Choose a date',
    dayNames: [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ],
    monthNames: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
    monthNamesShort: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
  },
};

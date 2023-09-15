import dayjs from 'dayjs';

export const getDefaultStartDate = () => {
  const date = new Date();
  date.setDate(date.getDate() + 1);
  date.setHours(10);
  date.setMinutes(0);

  return date;
};

export const getDefaultEndDate = () => {
  const date = getDefaultStartDate();
  date.setHours(date.getHours() + 1);

  return date;
};

export const isEndBeforeStart = (
  startDate: Date,
  startTime: Date,
  endDate: Date,
  endTime: Date,
) => {
  const start = dayjs(startDate)
    .set('hour', startTime.getHours())
    .set('minute', startTime.getMinutes());
  const end = dayjs(endDate)
    .set('hour', endTime.getHours())
    .set('minute', endTime.getMinutes());

  return end.isBefore(start);
};

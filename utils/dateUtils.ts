import {
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  parseISO,
} from "date-fns";

// Calculate elapsed time between two dates
export const calculateElapsedTime = (
  checkInDate: string,
  checkInTime: string
) => {
  const checkInDateTime = new Date(checkInDate);
  const [hours, minutes] = checkInTime.split(":");
  checkInDateTime.setHours(Number(hours));
  checkInDateTime.setMinutes(Number(minutes));
  const currentDateTime = new Date();

  const daysDifference = differenceInDays(currentDateTime, checkInDateTime);
  const hoursDifference = differenceInHours(currentDateTime, checkInDateTime);
  const minutesDifference = differenceInMinutes(
    currentDateTime,
    checkInDateTime
  );

  // Calculate days, hours, and minutes
  const daysElapsed = Math.floor(daysDifference);
  const hoursElapsed = Math.floor(hoursDifference % 24);
  const minutesElapsed = Math.floor(minutesDifference % 60);

  return { days: daysElapsed, hours: hoursElapsed, minutes: minutesElapsed };
};

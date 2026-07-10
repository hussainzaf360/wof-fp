export const OPEN_HOUR = 11; // 11:00 AM
export const CLOSE_HOUR = 22; // 10:00 PM

/** True when the park is open (local time), based on daily 11 AM–10 PM hours. */
export function isOpenNow(date: Date = new Date()): boolean {
  const minutes = date.getHours() * 60 + date.getMinutes();
  return minutes >= OPEN_HOUR * 60 && minutes < CLOSE_HOUR * 60;
}

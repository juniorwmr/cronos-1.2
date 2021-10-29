export function handlePostgresDate(date: string): Date {
  let newDate;
  const barDateFormat = date.split('/');
  const isoDateFormat = date.split('T');
  if (barDateFormat.length > 1) {
    newDate = barDateFormat.reverse().join('-');
  } else if (isoDateFormat.length > 1) {
    newDate = isoDateFormat[0];
  } else {
    newDate = date.split('-').reverse().join('-');
  }

  return newDate;
}

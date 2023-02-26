export function getTime(time: string) {
  const date = new Date(Date.parse(time));

  return `${date.toLocaleDateString()} в ${date.getHours()}:${date.getMinutes()}`;
}

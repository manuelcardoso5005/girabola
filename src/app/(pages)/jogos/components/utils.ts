export const isLive = (match: any) => {
  if (match.resultado) return false;
  if (!match.data || !match.hora) return false;

  const now = new Date();
  const [year, month, day] = match.data.split("-").map(Number);
  const [hour, minute] = match.hora.split(":").map(Number);
  const matchDate = new Date(year, month - 1, day, hour, minute);
  const matchEnd = new Date(matchDate.getTime() + 2 * 60 * 60 * 1000);

  return now >= matchDate && now <= matchEnd;
};

export const getTimestamp = (match: any) => {
  if (!match.data || !match.hora) return 0;
  const [year, month, day] = match.data.split("-").map(Number);
  const [hour, minute] = match.hora.split(":").map(Number);
  return new Date(year, month - 1, day, hour, minute).getTime();
};

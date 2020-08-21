const formatTime = (number: number, fullTime = true) => {
  const first = Math.floor(number / 60);
  const firstString = String(first);
  const firstStringFinal =
    firstString.length === 1 ? `0${firstString}` : firstString;

  const second = Math.floor(number % 60);
  const secondString = String(second);
  const secondStringFinal =
    secondString.length === 1 ? `0${secondString}` : secondString;

  if (fullTime) {
    return `${firstStringFinal}:${secondStringFinal}`;
  }

  return firstString;
};

export default formatTime;

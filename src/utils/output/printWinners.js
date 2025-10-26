import { output } from "./output.js";

export const printWinners = (cars) => {
  const winners = formatWinners(cars);
  output();
  output(`최종 우승자 : ${winners}`);
};

const formatWinners = (cars) => {
  const maxResult = getMaxResult(cars);
  const winners = getWinners(cars, maxResult);
  return winners.join(", ");
};

const getMaxResult = (cars) => {
  const lastResults = Object.values(cars).map((results) => results.at(-1));
  const maxResult = Math.max(...lastResults);
  return maxResult;
};

const getWinners = (cars, maxResult) => {
  const winners = Object.entries(cars)
    .filter(([_name, results]) => results.at(-1) === maxResult)
    .map((w) => w[0]);

  return winners;
};

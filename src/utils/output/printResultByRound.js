import { output } from "./output.js";

export const printResultByRound = (cars) => {
  const resultByCar = formatResultByCar(cars);
  const resultByRound = formatResultByRound(resultByCar);
  output();
  output(resultByRound);
};

const formatResultByCar = (cars) => {
  const resultByCar = Object.entries(cars).map(
    ([name, result]) => `${name} : ${"-".repeat(result.at(-1))}`
  );
  return resultByCar;
};

const formatResultByRound = (resultByCar) => {
  const resultByRound = resultByCar.join("\n");
  return resultByRound;
};

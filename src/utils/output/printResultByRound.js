import { output } from "./output.js";

const DISTANCE_MARKER = "-";

export const printResultByRound = (cars) => {
  const resultByCar = formatResultByCar(cars);
  const resultByRound = formatResultByRound(resultByCar);
  output();
  output(resultByRound);
};

export const formatResultByCar = (cars) => {
  const resultByCar = Object.entries(cars).map(
    ([name, result]) => `${name} : ${DISTANCE_MARKER.repeat(result.at(-1))}`
  );
  return resultByCar;
};

const formatResultByRound = (resultByCar) => {
  const resultByRound = resultByCar.join("\n");
  return resultByRound;
};

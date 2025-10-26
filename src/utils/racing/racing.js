import { Random } from "@woowacourse/mission-utils";

const THRESHOLD = 4;
const MOVE_STEP = 1;

export const racing = (cars) => {
  Object.values(cars).forEach((results) => {
    const movedLocation = moveCar(results);
    updateResult(results, movedLocation);
  });
};

export const moveCar = (results) => {
  const randomNumber = getRandomNumber();

  let movedLocation = results.at(-1) ?? 0;
  if (randomNumber >= THRESHOLD) {
    movedLocation += MOVE_STEP;
  }

  return movedLocation;
};

const getRandomNumber = (start = 0, end = 9) => {
  return Random.pickNumberInRange(start, end);
};

const updateResult = (results, movedLocation) => {
  results.push(movedLocation);
};

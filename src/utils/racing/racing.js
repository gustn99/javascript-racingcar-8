import { Random } from "@woowacourse/mission-utils";

export const racing = (cars) => {
  Object.values(cars).forEach((results) => {
    const movedLocation = moveCar(results);
    updateResult(results, movedLocation);
  });
};

const moveCar = (results) => {
  const randomNumber = getRandomNumber();

  let movedLocation = results.at(-1) ?? 0;
  if (randomNumber >= 4) {
    movedLocation += 1;
  }

  return movedLocation;
};

const getRandomNumber = (start = 0, end = 9) => {
  return Random.pickNumberInRange(start, end);
};

const updateResult = (results, movedLocation) => {
  results.push(movedLocation);
};

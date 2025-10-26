import { validatedInput } from "./input.js";

export const roundInput = async () => {
  const roundString = await validatedInput("시도할 횟수는 몇 회인가요?");
  const validRound = getValidRound(roundString);
  return validRound;
};

const getValidRound = (roundString) => {
  validateRound(roundString);
  return Number(roundString);
};

const validateRound = (roundString) => {
  if (isNaN(roundString)) {
    throw new Error("[ERROR] 숫자만 입력해 주세요.");
  }

  if (Number(roundString) <= 0) {
    throw new Error("[ERROR] 양수만 입력 가능합니다.");
  }
};

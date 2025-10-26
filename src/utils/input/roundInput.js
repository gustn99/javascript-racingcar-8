import { INPUT_MESSAGES } from "../../constants/inputMessages.js";
import { validatedInput } from "./input.js";

export const roundInput = async () => {
  const roundString = await validatedInput(INPUT_MESSAGES.round);
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

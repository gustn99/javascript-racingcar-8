import { INPUT_MESSAGES } from "../../constants/inputMessages.js";
import { ROUND_ERROR_MESSAGES } from "../../constants/errorMessages.js";

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
    throw new Error(ROUND_ERROR_MESSAGES.number);
  }

  if (Number(roundString) <= 0) {
    throw new Error(ROUND_ERROR_MESSAGES.positive);
  }
};

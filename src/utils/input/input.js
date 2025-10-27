import { Console } from "@woowacourse/mission-utils";

import { ERROR_MESSAGES } from "../../constants/errorMessages";

export const validatedInput = async (question) => {
  const userInput = await input(question);
  validateInput(userInput);
  return userInput;
};

const input = async (question) => {
  const userInput = await Console.readLineAsync(`${question}\n`);
  return userInput;
};

export const validateInput = (input) => {
  if (input.trim() === "") {
    throw new Error(ERROR_MESSAGES.input.required);
  }
};

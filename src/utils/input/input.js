import { Console } from "@woowacourse/mission-utils";

export const validatedInput = async (question) => {
  const userInput = await input(question);
  validateInput(userInput);
  return userInput;
};

export const input = async (question) => {
  const userInput = await Console.readLineAsync(`${question}\n`);
  return userInput;
};

export const validateInput = (input) => {
  if (input.trim() === "") {
    throw new Error("[ERROR] 값을 입력해 주세요.");
  }
};

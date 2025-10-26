import { ERROR_MESSAGES } from "../../src/constants/errorMessages.js";
import { validateInput } from "../../src/utils/input/input.js";

describe("validateInput", () => {
  test("valid 테스트", () => {
    const input = "hello world";
    expect(() => validateInput(input)).not.toThrow();
  });

  test("required 테스트 (empty)", () => {
    const input = "";
    expect(() => validateInput(input)).toThrow(ERROR_MESSAGES.input.required);
  });

  test("required 테스트 (space)", () => {
    const input = " ";
    expect(() => validateInput(input)).toThrow(ERROR_MESSAGES.input.required);
  });
});

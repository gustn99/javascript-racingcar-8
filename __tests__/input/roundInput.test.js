import { ROUND_ERROR_MESSAGES } from "../../src/constants/errorMessages.js";
import { validateRound } from "../../src/utils/input/roundInput.js";

describe("validateRound", () => {
  test("valid 테스트", () => {
    const round = "5";
    expect(() => validateRound(round)).not.toThrow();
  });

  test("number 테스트", () => {
    const round = "a1";
    expect(() => validateRound(round)).toThrow(ROUND_ERROR_MESSAGES.number);
  });

  test("positive 테스트 (0)", () => {
    const round = "0";
    expect(() => validateRound(round)).toThrow(ROUND_ERROR_MESSAGES.positive);
  });

  test("positive 테스트 (음수)", () => {
    const round = "-1";
    expect(() => validateRound(round)).toThrow(ROUND_ERROR_MESSAGES.positive);
  });
});

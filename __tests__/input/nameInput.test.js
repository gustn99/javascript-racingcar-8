import { NAME_ERROR_MESSAGES } from "../../src/constants/errorMessages.js";
import { validateName } from "../../src/utils/input/nameInput.js";

describe("validateName", () => {
  test("valid 테스트", () => {
    const name = ["hello", "world"];
    expect(() => validateName(name)).not.toThrow();
  });

  test("duplicate 테스트", () => {
    const name = ["hello", "hello"];
    expect(() => validateName(name)).toThrow(NAME_ERROR_MESSAGES.duplicate);
  });

  test("minLength 테스트 (빈 문자열)", () => {
    const name = ["hello", "", "world"];
    expect(() => validateName(name)).toThrow(NAME_ERROR_MESSAGES.minLength);
  });

  test("minLength 테스트 (공백 문자열)", () => {
    const name = ["hello", " ", "world"];
    expect(() => validateName(name)).toThrow(NAME_ERROR_MESSAGES.minLength);
  });

  test("maxLength 테스트", () => {
    const name = ["hello", "world!"];
    expect(() => validateName(name)).toThrow(NAME_ERROR_MESSAGES.maxLength);
  });
});

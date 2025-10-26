import { error } from "../utils/error/error.js";

export const NAME_ERROR_MESSAGES = {
  duplicate: error("자동차 이름은 중복될 수 없습니다."),
  minLength: error("자동차 이름은 하나 이상의 숫자 또는 문자여야 합니다."),
  maxLength: error("자동차 이름은 5글자 이내의 숫자 또는 문자여야 합니다."),
};

export const ROUND_ERROR_MESSAGES = {
  number: error("숫자만 입력해 주세요."),
  positive: error("양수만 입력 가능합니다."),
};

export const ERROR_MESSAGES = {
  input: {
    required: error("값을 입력해 주세요."),
  },
  name: NAME_ERROR_MESSAGES,
  round: ROUND_ERROR_MESSAGES,
};

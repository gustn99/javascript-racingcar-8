export const getValidRound = (roundString) => {
  validateRound(roundString);
  return Number(roundString);
};

export const validateRound = (roundString) => {
  if (isNaN(roundString)) {
    throw new Error("[ERROR] 숫자만 입력해 주세요.");
  }

  if (Number(roundString) <= 0) {
    throw new Error("[ERROR] 양수만 입력 가능합니다.");
  }
};

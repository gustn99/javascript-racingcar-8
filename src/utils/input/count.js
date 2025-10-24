export const getValidCount = (countString) => {
  validateCount(countString);
  return Number(countString);
};

export const validateCount = (countString) => {
  if (isNaN(countString)) {
    throw new Error("[ERROR] 숫자만 입력해 주세요.");
  }

  if (Number(countString) <= 0) {
    throw new Error("[ERROR] 양수만 입력 가능합니다.");
  }
};

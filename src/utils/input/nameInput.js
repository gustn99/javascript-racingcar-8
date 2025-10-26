import { validatedInput } from "./input.js";

export const nameInput = async () => {
  const nameString = await validatedInput(
    "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
  );
  const validNames = getValidNames(nameString);
  return validNames;
};

const getValidNames = (nameString) => {
  const nameArray = parseName(nameString);
  validateName(nameArray);
  return nameArray;
};

const parseName = (nameString) => {
  const parsedName = nameString.split(",");
  return parsedName;
};

const validateName = (nameArray) => {
  if (nameArray.length > new Set([...nameArray]).size) {
    throw new Error("[ERROR] 자동차 이름은 중복될 수 없습니다.");
  }

  nameArray.forEach((name) => {
    if (name.trim() === "") {
      throw new Error(
        "[ERROR] 자동차 이름은 하나 이상의 숫자 또는 문자여야 합니다."
      );
    }

    if (name.length > 5) {
      throw new Error(
        "[ERROR] 자동차 이름은 5글자 이내의 숫자 또는 문자여야 합니다."
      );
    }
  });
};

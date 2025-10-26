import { INPUT_MESSAGES } from "../../constants/inputMessages.js";
import { NAME_ERROR_MESSAGES } from "../../constants/errorMessages.js";

import { validatedInput } from "./input.js";

const SPLIT_DELIMITER = ",";

export const nameInput = async () => {
  const nameString = await validatedInput(INPUT_MESSAGES.name);
  const validNames = getValidNames(nameString);
  return validNames;
};

const getValidNames = (nameString) => {
  const nameArray = parseName(nameString);
  validateName(nameArray);
  return nameArray;
};

const parseName = (nameString) => {
  const parsedName = nameString.split(SPLIT_DELIMITER);
  return parsedName;
};

const validateName = (nameArray) => {
  const uniqueNameArray = new Set([...nameArray]);
  if (nameArray.length > uniqueNameArray.size) {
    throw new Error(NAME_ERROR_MESSAGES.duplicate);
  }

  nameArray.forEach((name) => {
    if (name.trim() === "") {
      throw new Error(NAME_ERROR_MESSAGES.minLength);
    }

    if (name.length > 5) {
      throw new Error(NAME_ERROR_MESSAGES.maxLength);
    }
  });
};

class Validator {
  static validateNonempty(value) {
    if (!value || value.trim() === '') {
      throw new Error('[ERROR] 값을 입력해 주세요.');
    }
  }
}

export default Validator;

import { Console } from '@woowacourse/mission-utils';
import Validator from '../utils/Validator.js';

class InputView {
  async read(question) {
    return await Console.readLineAsync(question);
  }

  async readWithNonemptyValidation(question) {
    const input = await this.read(question);
    Validator.validateNonempty(input);
    return input;
  }
}

export default InputView;

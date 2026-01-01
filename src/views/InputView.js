import { Console } from '@woowacourse/mission-utils';
import Validator from '../utils/Validator.js';

class InputView {
  async read(question) {
    return await Console.readLineAsync(question);
  }

  async readNameList() {
    const input = await this.read('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
    Validator.validateNonempty(input);
    return input.split(',').map(item => item.trim());
  }

  async readCount() {
    const input = await this.read('시도할 횟수는 몇회인가요?\n');
    Validator.validateNonempty(input);
    return Number(input);
  }
}

export default InputView;

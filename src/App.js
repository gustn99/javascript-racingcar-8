import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    const namesInput = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
    this.validateNonempty(namesInput);
    const countInput = await Console.readLineAsync('시도할 횟수는 몇회인가요?\n');
    this.validateNonempty(countInput);

    const nameList = this.parseNameList(namesInput);
    this.validateNameList(nameList);
    const count = Number(countInput);
    this.validateCount(count);
  }

  parseNameList(namesInput) {
    const nameList = namesInput.split(',').map((name) => name.trim());
    nameList.forEach(validateNonempty);
    return nameList;
  }

  validateNonempty(value) {
    if (value.trim() === '') {
      throw new Error('[ERROR] 값을 입력해 주세요.');
    }
  }

  validateNameList(nameList) {
    const nameSet = new Set(nameList);
    if (nameList.length !== nameSet.size) {
      throw new Error('[ERROR] 중복 이름이 포함되어 있습니다.');
    }
  }

  validateCount(count) {
    if (count <= 0 || !Number.isInteger(count)) {
      throw new Error('[ERROR] 횟수는 자연수만 입력 가능합니다.');
    }
  }
}

export default App;

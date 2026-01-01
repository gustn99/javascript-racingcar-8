import InputView from './views/InputView.js';
import OutputView from './views/OutputView.js';
import Validator from './utils/Validator.js';
import Car from './Car.js';
import Game from './Game.js';

class App {
  constructor() {
    this.inputView = new InputView();
    this.outputView = new OutputView();
  }

  async run() {
    const namesInput = await this.inputView.readWithNonemptyValidation('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
    const nameList = this.parseNameList(namesInput);
    this.validateNameList(nameList);

    const countInput = await this.inputView.readWithNonemptyValidation('시도할 횟수는 몇회인가요?\n');
    const count = Number(countInput);
    this.validateCount(count);

    const cars = nameList.map((name) => new Car(name));
    const game = new Game(cars);

    this.outputView.print('');
    this.outputView.print('실행 결과');
    for (let i = 0; i < count; i++) {
      game.playOneRound();
      this.outputView.print(game.formatPositionsByCar());
      this.outputView.print('');
    }

    const winners = game.calculateWinners();
    this.outputView.print(`최종 우승자 : ${winners.join(', ')}`);
  }

  parseNameList(namesInput) {
    const nameList = namesInput.split(',').map((name) => name.trim());
    nameList.forEach(Validator.validateNonempty);
    return nameList;
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

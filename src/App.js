import { Console, Random } from '@woowacourse/mission-utils';

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

    const winners = game.calculateWinners(cars);
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

class Validator {
  static validateNonempty(value) {
    if (!value || value.trim() === '') {
      throw new Error('[ERROR] 값을 입력해 주세요.');
    }
  }
}

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

class OutputView {
  print(value = '') {
    Console.print(value);
  }
}

class Game {
  #cars;

  constructor(cars) {
    this.#cars = cars;
  }

  playOneRound() {
    this.#cars.forEach((car) => {
      car.move();
    });
  }

  formatPositionsByCar() {
    const positions = [];
    this.#cars.forEach((car) => {
      positions.push(car.formatPosition());
    });
    return positions.join('\n');
  }

  calculateWinners(cars) {
    const positions = cars.map(car => car.getPosition());
    const maxPosition = Math.max(...positions);

    const winners = cars.filter((car) => car.getPosition() === maxPosition).map((car) => car.getName());
    return winners;
  }
}

class Car {
  #name;
  #position;

  constructor(name) {
    this.#name = name;
    this.#position = 0;
  }

  move() {
    const num = Random.pickNumberInRange(0, 9);
    this.movingForwardOrStop(num);
  }

  movingForwardOrStop(num) {
    if (num >= 4) {
      this.#position += 1;
    }
  }

  formatPosition() {
    return `${this.#name} : ${'-'.repeat(this.#position)}`;
  }

  getName() {
    return this.#name;
  }

  getPosition() {
    return this.#position;
  }
}

export default App;

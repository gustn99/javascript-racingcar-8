import InputView from './views/InputView.js';
import OutputView from './views/OutputView.js';
import Car from './Car.js';
import Game from './Game.js';

class App {
  constructor() {
    this.inputView = new InputView();
    this.outputView = new OutputView();
  }

  async run() {
    const nameList = await this.inputView.readNameList();
    const count = await this.inputView.readCount();
    this.validateCount(count);

    const cars = nameList.map((name) => new Car(name));
    const game = new Game(cars);

    this.outputView.print('');
    this.outputView.print('실행 결과');
    for (let i = 0; i < count; i++) {
      game.playOneRound();
      this.outputView.printResultByRound(game.getPositionsByCar());
    }

    const winners = game.calculateWinners();
    this.outputView.printWinners(winners);
  }

  validateCount(count) {
    if (count <= 0 || !Number.isInteger(count)) {
      throw new Error('[ERROR] 횟수는 자연수만 입력 가능합니다.');
    }
  }
}

export default App;

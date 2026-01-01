import { Console } from '@woowacourse/mission-utils';

class OutputView {
  print(value = '') {
    Console.print(value);
  }

  printResultByRound(positionsByCar) {
    const formatted = positionsByCar
    .map(({ name, position }) => `${name} : ${'-'.repeat(position)}`)
    .join('\n');

    this.print(formatted);
    this.print();
  }

  printWinners(winners) {
    this.print(`최종 우승자 : ${winners.join(', ')}`);
  }
}

export default OutputView;

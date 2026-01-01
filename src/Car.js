import { Random } from '@woowacourse/mission-utils';

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

  getName() {
    return this.#name;
  }

  getPosition() {
    return this.#position;
  }
}

export default Car;

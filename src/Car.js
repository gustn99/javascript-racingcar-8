import { Random } from '@woowacourse/mission-utils';

class Car {
  #name;
  #position;

  constructor(name) {
    this.validate(name);
    this.#name = name;
    this.#position = 0;
  }

  validate(name) {
    if (!name || name.length < 1 || name.length > 5) {
      throw new Error('[ERROR] 이름은 1-5자 사이 숫자 또는 문자여야 합니다.');
    }
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

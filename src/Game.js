class Game {
  #cars;

  constructor(cars) {
    this.validate(cars);
    this.#cars = cars;
  }

  validate(cars) {
    const names = cars.map(car => car.getName());
    const nameSet = new Set(names);
    if (names.length !== nameSet.size) {
      throw new Error('[ERROR] 중복 이름이 포함되어 있습니다.');
    }
  }

  playOneRound() {
    this.#cars.forEach((car) => {
      car.move();
    });
  }

  getPositionsByCar() {
    return this.#cars.map((car) => ({ name: car.getName(), position: car.getPosition() }));
  }

  calculateWinners() {
    const positions = this.#cars.map(car => car.getPosition());
    const maxPosition = Math.max(...positions);

    const winners = this.#cars.filter((car) => car.getPosition() === maxPosition).map((car) => car.getName());
    return winners;
  }
}

export default Game;

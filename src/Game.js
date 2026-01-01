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

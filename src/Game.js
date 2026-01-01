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

  calculateWinners() {
    const positions = this.#cars.map(car => car.getPosition());
    const maxPosition = Math.max(...positions);

    const winners = this.#cars.filter((car) => car.getPosition() === maxPosition).map((car) => car.getName());
    return winners;
  }
}

export default Game;

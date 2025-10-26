import { nameInput } from "./utils/input/nameInput.js";
import { roundInput } from "./utils/input/roundInput.js";

import { generateCars } from "./utils/racing/generateCars.js";
import { racing } from "./utils/racing/racing.js";

import { printResultByRound } from "./utils/output/printResultByRound.js";
import { printWinners } from "./utils/output/printWinners.js";

class App {
  async run() {
    const names = await nameInput();
    const round = await roundInput();
    const cars = generateCars(names);

    for (let i = 0; i < round; i++) {
      racing(cars);
      printResultByRound(cars);
    }

    printWinners(cars);
  }
}

export default App;

import { validatedInput } from "./utils/input/input.js";
import { getValidNames } from "./utils/input/name.js";
import { getValidCount } from "./utils/input/count.js";
import { generateCars } from "./utils/racing/generateCars.js";
import { racing } from "./utils/racing/racing.js";
import { printResultByRound } from "./utils/output/printResultByRound.js";

class App {
  async run() {
    const nameString = await validatedInput(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
    );
    const validNames = getValidNames(nameString);

    const countString = await validatedInput("시도할 횟수는 몇 회인가요?");
    const validCount = getValidCount(countString);

    const cars = generateCars(validNames);
    for (let i = 0; i < validCount; i++) {
      racing(cars);
      printResultByRound(cars);
    }
  }
}

export default App;

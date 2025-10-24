import { input } from "./utils/input/input.js";
import { getValidNames } from "./utils/input/name.js";
import { getValidCount } from "./utils/input/count.js";

class App {
  async run() {
    const nameString = await input(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
    );
    const validNames = getValidNames(nameString);

    const countString = await input("시도할 횟수는 몇 회인가요?");
    const validCount = getValidCount(countString);
  }
}

export default App;

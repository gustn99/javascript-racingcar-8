import { input } from "./utils/input/input.js";
import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const nameString = input();
    Console.print(nameString);
  }
}

export default App;

import { generateCars } from "../../src/utils/racing/generateCars";

describe("generateCars", () => {
  test("반환값 테스트", () => {
    const names = ["pobi", "woni"];
    expect(generateCars(names)).toEqual({
      pobi: [],
      woni: [],
    });
  });
});

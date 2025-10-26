import { formatResultByCar } from "../../src/utils/output/printResultByRound";

describe("formatResultByCar", () => {
  test("반환값 테스트 (여러 차량)", () => {
    const cars = {
      pobi: [0, 1, 2],
      woni: [0, 0, 1],
    };
    expect(formatResultByCar(cars)).toEqual(["pobi : --", "woni : -"]);
  });

  test("반환값 테스트 (단일 차량)", () => {
    const cars = {
      pobi: [0, 1, 2],
    };
    expect(formatResultByCar(cars)).toEqual(["pobi : --"]);
  });
});

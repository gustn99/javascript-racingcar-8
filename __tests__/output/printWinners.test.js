import { getMaxResult, getWinners } from "../../src/utils/output/printWinners";

describe("getMaxResult", () => {
  test("반환값 테스트", () => {
    const cars = {
      pobi: [0, 1, 2],
      woni: [0, 0, 1],
    };
    expect(getMaxResult(cars)).toBe(2);
  });
});

describe("getWinners", () => {
  test("반환값 테스트 (단일 우승자)", () => {
    const cars = {
      pobi: [0, 1, 2],
      woni: [0, 0, 1],
    };
    const maxResult = 2;
    expect(getWinners(cars, maxResult)).toEqual(["pobi"]);
  });

  test("반환값 테스트 (중복 우승자)", () => {
    const cars = {
      pobi: [0, 1, 2],
      woni: [1, 1, 2],
      gustn: [1, 1, 1],
    };
    const maxResult = 2;
    expect(getWinners(cars, maxResult)).toEqual(["pobi", "woni"]);
  });
});

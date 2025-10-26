import { moveCar } from "../../src/utils/racing/racing";
import { mockRandoms } from "../ApplicationTest";

const MOVING_FORWARD = 4;
const STOP = 3;

describe("moveCar", () => {
  test("기존 결과가 있고 앞으로 가는 경우", () => {
    const results = [1];
    mockRandoms([MOVING_FORWARD]);
    expect(moveCar(results)).toBe(2);
  });

  test("기존 결과가 있고 멈추는 경우", () => {
    const results = [1];
    mockRandoms([STOP]);
    expect(moveCar(results)).toBe(1);
  });

  test("기존 결과가 없고 앞으로 가는 경우", () => {
    const results = [];
    mockRandoms([MOVING_FORWARD]);
    expect(moveCar(results)).toBe(1);
  });

  test("기존 결과가 없고 멈추는 경우", () => {
    const results = [];
    mockRandoms([STOP]);
    expect(moveCar(results)).toBe(0);
  });
});

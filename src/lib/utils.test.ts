import { distributeRange } from "./utils";
import { describe, expect, test } from "vitest";

describe("distributeRange", () => {
  test("should distribute the range based on the weights", () => {
    const weights = [1, 2, 3] as const;
    const range = [0, 12] as const;
    const expected = [
      [0, 2],
      [2, 6],
      [6, 12],
    ];
    const result = distributeRange({ weights, range });
    expect(result).toEqual(expected);
  });

  test("should handle empty weights array", () => {
    const weights: number[] = [] as const;
    const range = [0, 10] as const;
    const expected: [number, number][] = [];
    const result = distributeRange({ weights, range });
    expect(result).toEqual(expected);
  });

  test("should handle zero total weight", () => {
    const weights = [0, 0, 0] as const;
    const range = [0, 10] as const;
    const expected = [
      [0, 0],
      [0, 0],
      [0, 0],
    ];
    const result = distributeRange({ weights, range });
    expect(result).toEqual(expected);
  });

  test("should handle negative range", () => {
    const weights = [3, 2, 1] as const;
    const range = [-12, 0] as const;
    const expected = [
      [-12, -6],
      [-6, -2],
      [-2, 0],
    ];
    const result = distributeRange({ weights, range });
    expect(result).toEqual(expected);
  });
});

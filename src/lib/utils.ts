import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Distributes a range based on the weights provided.
 *
 * @param weights - An array of numbers representing the weights.
 * @param range - A tuple representing the range to be distributed.
 * @returns An array of tuples representing the distributed ranges.
 */
export function distributeRange(
  weights: readonly number[],
  range: readonly [number, number],
) {
  const totalWeight = weights.reduce((acc, weight) => acc + weight, 0);
  const totalRange = Math.abs(range[1] - range[0]);
  const result: Array<[number, number]> = [];
  let current = range[0];

  for (const weight of weights) {
    const next =
      totalWeight === 0
        ? current
        : current + (totalRange * weight) / totalWeight;
    result.push([current, next]);
    current = next;
  }

  return result;
}

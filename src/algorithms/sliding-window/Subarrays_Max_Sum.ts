// Sliding Window
// Problems: Find the maximum sum of all subarray of size K

import RunWithTestCases from "../../utils/run-with-testcases";

console.log("Find the maximum sum of all subarray of size K");

function findSubarrayMaxSum(arr: number[], subArrSize: number): number {
  if (!arr.length || arr.length < subArrSize) return -1;

  let maxSum: number = 0;
  let windowSum: number = 0;

  for (let i = 0; i < subArrSize; i++) {
    windowSum += arr[i];
  }

  maxSum = windowSum;

  for (let i = subArrSize; i < arr.length; i++) {
    windowSum += arr[i] - arr[i - subArrSize];

    if (windowSum > maxSum) maxSum = windowSum;
  }

  return maxSum;
}

const testCases = [
  { params: { arr: [1, 2, 3, 4, 5], subArrSize: 3 }, expected: 12 },
  { params: { arr: [2, 1, 5, 1, 3, 2], subArrSize: 3 }, expected: 9 },
  { params: { arr: [3, 4, 5, 6, 7], subArrSize: 2 }, expected: 13 },
  { params: { arr: [-2, -3, -1, -4, -6], subArrSize: 2 }, expected: -4 },
  { params: { arr: [10, 20, 30, 40], subArrSize: 2 }, expected: 70 },
  { params: { arr: [1], subArrSize: 1 }, expected: 1 },
  { params: { arr: [], subArrSize: 3 }, expected: -1 },
  { params: { arr: [1, 2], subArrSize: 3 }, expected: -1 },
];

RunWithTestCases(findSubarrayMaxSum, testCases);

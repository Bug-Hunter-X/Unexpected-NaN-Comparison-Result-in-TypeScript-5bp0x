# Unexpected NaN Comparison Result in TypeScript

This repository demonstrates an uncommon bug in TypeScript related to comparing NaN (Not a Number) values.  The `compare` function, designed to compare two numbers, returns an incorrect result when comparing NaN with itself.  This violates the fundamental property that NaN is not equal to anything, including itself.

The solution shows how to correctly handle NaN comparisons using the `isNaN` function.

## How to Reproduce

1. Clone this repository.
2. Open `bug.ts` and observe the unexpected output.
3. Open `bugSolution.ts` to see the corrected implementation.

## Bug and Solution

The core issue lies in the default behavior of the less than and greater than operators when comparing NaN.  The solution provides a robust way to address this by explicitly checking for NaN using the `isNaN` function before proceeding with comparisons.
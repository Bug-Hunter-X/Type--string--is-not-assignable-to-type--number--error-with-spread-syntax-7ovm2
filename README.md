# Type 'string' is not assignable to type 'number' in TypeScript

This repository demonstrates a common TypeScript error: 'Type 'string' is not assignable to type 'number' when using the spread syntax to combine arrays of different types.

## Bug

The `combineArrays` function attempts to combine two arrays using the spread syntax. However, if the arrays have different types (e.g., one array of numbers and one array of strings), TypeScript will throw a type error because the resulting array cannot be consistently typed.

## Solution

The solution involves using a generic type parameter `T` to make the function more flexible. The generic type parameter will ensure that only elements of the same type can be combined into the resulting array. This avoids the type error.
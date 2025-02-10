function combineArrays<T>(arr1: T[], arr2: T[]): T[] {
  return [...arr1, ...arr2];
}

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combinedArray = combineArrays(arr1, arr2); // No error

const arr3 = ["a", "b", "c"];
const arr4 = ["d", "e", "f"];

const combinedArray2 = combineArrays(arr3, arr4); // No error
/*
Write a function called zipList that accepts two lists of equal length and returns the result of 
alternatingly taking elements. For example: given the two lists [‘a’, ‘b’, ‘c’] and [1, 2, 3], 
the function should return [‘a’, 1, ‘b’, 2, ‘c’, 3]. zipList should use a loop. 
Now write a function called zipListTheFunctionalWay that does the same thing using Array functions.
 Add console.log statements for each function to show the result. 
 For example, console.log(zipList(['a', 'b', 'c'], [1, 2, 3])); should output 
 ['a', 1, 'b', 2, 'c', 3]. Check the output in the browser console.
*/

// this assume both lists are of equal length
function zipList(list1: unknown[], list2: unknown[]): unknown[] {
  const zippledList = [];
  for (let i = 0; i < list1.length; i++) {
    zippledList.push(list1[i], list2[i]);
  }
  return zippledList;
}

console.log(zipList(['a', 'b', 'c'], [1, 2, 3]));

function zipListTheFunctionalWay(list1: unknown[], list2: unknown[]): unknown[]{
  const zippledList: unknown[] = [];
  list1.forEach((element, index) => {
    zippledList.push(element, list2[index]);
  });
  return zippledList;
}

console.log(zipListTheFunctionalWay(['a', 'b', 'c'], [1, 2, 3]));
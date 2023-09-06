// Question 1
function createArray() {
   const colors = ["red", "blue", "green"];
   return colors;
};
console.log("Question 1:");
console.log(createArray());
// Question 2
function getFirstElement(array) {
   x = array[0];
   return x
};
console.log("Question 2:");
console.log(getFirstElement([1, 2, 3, 4, 5, 6]));
// Question 3
function changeThirdElement(array, newElement) {
   array[2] = newElement;
   return array
};
console.log("Question 3:");
console.log(changeThirdElement([1, 2, 5, 4, 5, 6], 3));
// Question 4
function getArrayLength(array) {
   x = array.length;
   return x
};
console.log("Question 4:");
console.log(getArrayLength([1, 2, 3, 4, 5, 6]));
// Question 5
function getLastElement(array) {
   x = array[array.length - 1];
   return x;
};
console.log("Question 5:");
console.log(getLastElement([1, 2, 3, 4, 5, 6]));
// Question 6
function addElement(array, element) {
   array.push(element);
   return array
};
console.log("Question 6:");
console.log(addElement([1, 2, 3, 4, 5], 6));
// Question 7
function removeLastElement(array) {
   array.pop();
   return array
};
console.log("Question 7:");
console.log(removeLastElement([1, 2, 3, 4, 5, 6, 7]));
// Question 8
function concatenateArrays(array1, array2) {
   for (i = 0; i < array2.length; i++) {
      array1.push(array2[i]);
   };
   return array1;
};
console.log("Question 8:");
console.log(concatenateArrays([1, 2, 3, 4, 5, 6], [7, 8, 9, 10]));
// Question 9
function findInArray(array, element) {
   found = false
   for (i = 0; i < array.length; i++) {
      if (array[i] = element) {
         found = true
      }
   }
   return found;
}
console.log("Question 9:");
console.log(findInArray([1, 2, 3, 4, 5, 6], 3));
// Question 10
function filterGreaterThanFive(array) {
   for (i = 0; i < array.length; i++) {
      if (array[i] <= 5) {
         array.splice(i, 1);
         i -= 1;
      }
   }
   return array
}
console.log("Question 10:");
console.log(filterGreaterThanFive([0, 1, 2, 3, 4, 5, 6, 7, 8]));
// Question 11
function sumArray(array) {
   sum = 0;
   for (i = 0; i < array.length; i++) {
      sum = sum + array[i];
   }
   return sum
} 
console.log("Question 11:");
console.log(sumArray([1, 2, 3, 4, 5, 6]));
// Question 12
function sortArray(array) {
   newArray = [];
   y = array.length;
   for (i = 0; i < y; i ++) {
      x = array[0];
      for (j = 1; j < array.length; j++) {
         if (array[j] < x) {
            x = array[j];
         }
      }
      array.splice(array.indexOf(x), 1);
      newArray.push(x);
   }
   return newArray;
} 
console.log("Question 12:");
console.log(sortArray([5, 2, 6, 3, 7, 1, 4]));
// Question 13
function reverseArray(array) {
   x = array.length;
   newArray = [];
   for (i = 0; i < x; i++) {
      y = array.splice(array.length - 1, 1);
      newArray.push(y);
   }
   return newArray
} 
console.log("Question 13:");
console.log(reverseArray([1, 2, 3, 4, 5, 6]));
// Question 14
function doubleArray(array) {
   newArray = [];
   for (i = 0; i < array.length; i++) {
      x = array[i] * 2;
      newArray.push(x)
   }
   return newArray
} 
console.log("Question 14:");
console.log(doubleArray([1, 2, 3, 4, 5, 6]));
// Question 15
function multiplyArray1(array) {
   product = 1;
   for (i = 0; i < array.length; i++) {
      product = product * array[i];
   }
   return product;
} 
console.log("Question 15:");
console.log(multiplyArray1([1, 2, 3, 4, 5, 6]));
// Question 16
function countOccurrences(array, element) {
   counter = 0;
   for (i = 0; i < array.length; i++) {
      if (array[i] == element) {
         counter += 1;
      }
   }
   return counter;
 } 
console.log("Question 16:");
console.log(countOccurrences(["apple", "banana", "apple", "pear", "orange", "apple"], "apple"));
// Question 17
function getNames(array) {
   newArray = []
   for (i = 0; i < array.length; i++) {
      x = array[i].name;
      newArray.push(x);
   }
   return newArray;
} 
console.log("Question 17:");
console.log(getNames([{"name": "John"}, {"name": "Jane"}, {"name": "Oliver"}]));
// Question 18 
function removeElement(array, index) {
   array.splice(index,1);
   return array;
} 
console.log("Question 18:");
console.log(removeElement(["apple", "banana", "pear"], 1));
// Question 19
function mergeArrays(array1, array2) {
   for (i = 0; i < array2.length; i++) {
      array1.push(array2[i]);
   }
   return array1;
} 
console.log("Question 19:");
console.log(mergeArrays([1, 2, 3], [3, 4, 5]));
// Question 20
function sumEvenNumbers(array) {
   sum = 0;
   for (i = 0; i < array.length; i++) {
      if ((array[i] % 2) == 0) {
         sum = sum + array[i];
      }
   }
   return sum;
}
console.log("Question 20:");
console.log(sumEvenNumbers([1, 2, 3, 4, 5]));
// Question 21
function fillArray(n, element) {
   newArray = [];
   for (i = 0; i < n; i++) {
      newArray.push(element);
   }
   return newArray;
} 
console.log("Question 21:");
console.log(fillArray(3, "apple"));
// Question 22
function createRange(start, end) {
   newArray = [];
   for (i = start; i < end; i++) {
      newArray.push(i);
   }
   newArray.push(end);
   return newArray;
} 
console.log("Question 22:");
console.log(createRange(4, 10));
// Question 23
function arraysEqual(array1, array2) {
   if (array1.length = array2.length) {
      for (i = 0; i < array1.length; i++) {
         if (array1[i] != array2[i]) {
            return false
         }
      }
      return true
   }
   return false
} 
console.log("Question 23:");
console.log(arraysEqual([1, 2, 3, 4],[1, 2, 3, 4]));
// Question 24
function countArrayElements(array) {
   arrayElements = {};
   inList = [];
   for (i = 0; i < array.length; i++) {
      x = false; 
      element = array[i];
      for (j = 0; j < inList.length; j++) {
         if (inList[j] == element) {
            x = true;
         }
      }
      if (x == false) {
         inList.push(element);
         arrayElements[element] = 1;
      } 
      if (x == true) {
         arrayElements[element] += 1;
      }
   }
   return arrayElements;
} 
console.log("Question 24:");
console.log(countArrayElements(["banana", "apple", "apple", "banana", "apple", "pear", "kiwi"]));
// Question 25
function shuffleArray(array) {
   newArray = [];
   x = array.length;
   x1 = x;
   for (i = 0; i < x1; i++) {
      y = Math.floor(Math.random() * x);
      z = array.splice(y, 1);
      newArray.push(z);
      x -= 1;
   }
   return newArray;
} 
console.log("Question 25:");
console.log(shuffleArray([1, 2, 3, 4, 5, 6]));
// Question 26
function filterStrings(array) {
   x = array.length;
   newArray = [];
   console.log(x);
   for (i = 0; i < x; i++) {
      if (! isNaN(array[i])) {
         newArray.push(array[i]);
      }
   }
   return newArray;
} 
console.log("Question 26:");
console.log(filterStrings([1, "two", 3, "four", 5]));
// Question 27
function findIndex(array, element) {
   for (i = 0; i < array.length; i++) {
      if (array[i] == element) {
         return i
      }
   }
   
}
console.log("Question 27:");
console.log(findIndex(["apple", "banana", "pear"], "banana"));
// Question 28
function findMax(array) {
   max = array[0];
   for (i = 1; i < array.length; i++) {
      if (array[i] > max) {
         max = array[i];
      }
   }
   return max;
}
console.log("Question 28:");
console.log(findMax([1, 2, 3, 4, 5, 6]));
// Question 29
function deepCopy(array) {
   newArray = [];
   for (i = 0; i < array.length; i++) {
      newArray.push(array[i]);
   }
   return newArray;
} 
console.log("Question 29:");
console.log(deepCopy([[1, 2, 3], [4, 5, 6]]));
// Question 30
function flatten(array) {
   newArray = [];
   for (i = 0; i < array.length; i++) {
      listX = array[i]
      for (j = 0; j < listX.length; j++) {
         newArray.push(listX[j]);
      }
   }
   return newArray
} 
console.log("Question 30:");
console.log(flatten([[1, 2, 3], [4, 5, 6]]));
// Question 31
function getIntersection(array1, array2) {
   newArray =[];
   for (i = 0; i < array1.length; i++) {
      for (j = 0; j < array2.length; j++) {
         if (array1[i] == array2[j]) {
            newArray.push(array1[i])
         }
      }
   }
   return newArray;
}
console.log("Question 31:");
console.log(getIntersection([1, 2, 3, 4, 5], [4, 5, 6, 7, 8]));
// Question 32
function getUniqueElements(array) {
   newArray = [];
   newArray.push(array[0]);
   for (i = 1; i < array.length; i++) {
      x = false;
      for (j = 0; j < newArray.length; j++) {
         if (array[i] == newArray[j]) {
            x = true;
         }
      }
      if (! x) {
         newArray.push(array[i]);
      }
   }
   return newArray;
} 
console.log("Question 32:");
console.log(getUniqueElements([1, 1, 2, 2, 3, 3, 3]));
// Question 33
function getDifference(array1, array2) {
   newArray = [];
   for (i = 0; i < array1.length; i++) {
      x = false;
      for (j = 0; j < array2.length; j++) {
         if (array1[i] == array2[j]) {
            x = true;
         }
      }
      if (! x) {
         newArray.push(array1[i]);
      }
   }
   return newArray
}  
console.log("Question 33:");
console.log(getDifference([1, 2, 3, 4, 5], [4, 5, 6, 7, 8]));
// Question 34
function removeElementWE(array, element) {
   for (i = 0; i < array.length; i++) {
      if (array[i] == element) {
         array.splice(i, 1);
         i = i - 1;
      }
   }
   return array;
} 
console.log("Question 34:");
console.log(removeElementWE([1, 2, 3, 4, 5], 3));
// Question 35
function sumElements(array) {
   sum = 0;
   for (i = 0; i < array.length; i++) {
      sum = sum + array[i];
   }
   return sum
} 
console.log("Question 35:");
console.log(sumElements([1, 2, 3, 4, 5]));
// Question 36
function replaceElement(array, element, newElement) {
   for (i = 0; i < array.length; i++) {
      if (array[i] == element) {
         array[i] = newElement;
      }
   }
   return array;
} 
console.log("Question 36:");
console.log(replaceElement([1, 2, 3, 4, 5], 3, 10));
// Question 37
function largestNumbers(array) {
   newArray = [];
   for (i = 0; i < array.length; i++) {
      x = array[i];
      biggest = x[0];
      for (j = 1; j < x.length; j++) {
         if (x[j] > biggest) {
            biggest = x[j];
         }
      }
      newArray.push(biggest);
   }
   return newArray;
} 
console.log("Question 37:");
console.log(largestNumbers([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
// Question 38
function stringsLength(array) {
   lengths = [];
   for (i = 0; i < array.length; i++) {
      x = array[i].length;
      lengths.push(x);
   }
   return lengths
} 
console.log("Question 38:");
console.log(stringsLength(["apple", "banana", "cherry"]));
// Question 39
function findLongestString(array) {
   longestLength = 0;
   for (i = 0; i < array.length; i++) {
      x = array[i].length;
      if (x > longestLength) {
         longestLength = x;
         index = i;
      }
   }
   longest = array[index];
   return longest;
} 
console.log("Question 39:");
console.log(findLongestString(["apple", "banana", "cherry"]));
// Question 40
function oddPositionElements(array) {
   newArray = [];
   for (i = 0; i < array.length; i++) {
      if ((i % 2) == 1) {
         newArray.push(array[i]);
      }
   }
   return newArray;
} 
console.log("Question 40:");
console.log(oddPositionElements([1, 2, 3, 4, 5]));
// Question 41
function calculateAverage(array) {
   sum = 0;
   for (i = 0; i < array.length; i++) {
      sum = array[i] + sum;
   }
   avg = sum / array.length;
   return avg
} 
console.log("Question 41:");
console.log(calculateAverage([1, 2, 3, 4, 5]));
// Question 42
function concatenateArrays(array1, array2) {
   newArray = [];
   for (i = 0; i < array1.length; i++) {
      newArray.push(array1[i]);
   }
   for (i = 0; i < array2.length; i++) {
      newArray.push(array2[i]);
   }
   return newArray
} 
console.log("Question 42:");
console.log(concatenateArrays([1, 2, 3], [4, 5, 6]));
// Question 43
function findSecondLowest(array) {
   lowest = array[0];
   for (i = 1; i < array.length; i++) {
      if (array[i] < lowest) {
         lowest = array[i]
      }
   }
   for (i = 0; i < array.length; i++) {
      if (array[i] == lowest) {
         array.splice(i, 1);
         i -= 1
      }
   }
   lowest = array[0];
   for (i = 1; i < array.length; i++) {
      if (array[i] < lowest) {
         lowest = array[i]
      }
   }
   return lowest;
} 
console.log("Question 43:");
console.log(findSecondLowest([1, 1, 2, 3, 4, 5]));
//Question 44
function findSecondLargest(array) {
   highest = array[0];
   for (i = 1; i < array.length; i++) {
      if (array[i] > lowest) {
         highest = array[i]
      }
   }
   for (i = 0; i < array.length; i++) {
      if (array[i] == highest) {
         array.splice(i, 1);
         i -= 1
      }
   }
   highest = array[0];
   for (i = 1; i < array.length; i++) {
      if (array[i] > highest) {
         highest = array[i]
      }
   }
   return highest;
} 
console.log("Question 44:");
console.log(findSecondLargest([1, 2, 3, 4, 5]));
// Question 45
function isPalindrome(array) {
   newArray = [];
   for (i = 0; i < (array.length / 2); i++) {
      newArray.push(array[i]);
   }
   newArray2 = [];
   for (i = (array.length - 1); i > ((array.length / 2) - 1); i--) {
      newArray2.push(array[i]);
   }
   x = true;
   for (i = 0; i < newArray.length; i++) {
      if (! newArray[i] == newArray2) {
         x = false;
      }
   }
   return x;
} 
console.log("Question 45:");
console.log(isPalindrome(["a", "b", "c", "b", "a"]));
// Question 46
function removeFalsy(array) {
   for (i = 0; i < array.length; i++) {
      x = array[i]
      if (x == false) {
         array.splice(i, 1);
         x -= 1;
      } 
      if (x == null) {
         array.splice(i, 1);
         x -= 1;
      }
      if (x == undefined) {
         array.splice(i, 1);
         x -= 1;
      } 
      if (x == 0) {
         array.splice(i, 1);
         x -= 1;
      } 
      if (x == NaN) {
         array.splice(i, 1);
         x -= 1;
      } 
      if (x == "") {
         array.splice(i, 1);
         x -= 1;
      }
   }
   return array;
}
console.log("Question 46:");
console.log(removeFalsy([1, 0, 'apple', '', undefined, null, 'banana']));
// Question 47
function bogoSortArray(array) {
   sorted = true;
   for (i = 0; i < (array.length - 1); i++) {
      if (array[i] > array[i + 1]) {
         sorted = false;
      }
   }
   while (sorted == false) {
      newArray = array;
      l1 = array.length;
      for (i = 0; i < l1; i++) {
         x = Math.floor(Math.random() * (array.length));
         y = newArray.splice(x, 1);
         array.push(y[0]);
      }
      sorted = true;
      for (i = 0; (i < array.length - 1); i++) {
         if (array[i] > array[i + 1]) {
            sorted = false;
         }
      }
   }
   return array;
} 
console.log("Question 47:");
console.log(bogoSortArray([5, 3, 1, 4, 2]));
// Question 48
function reverseString(array) {
   for (i = array.length; i > 0; i--) {
      x = array.splice(i - 1, 1);
      array.push(x[0]);
   }
   return array;
}
console.log("Question 48:");
console.log(reverseString(['a', 'b', 'c', 'd', 'e']));
// Question 49
function compareNumbers(a, b) {
   ans = "";
   if (a > b) {
      ans = a + " is bigger than " + b;
   }
   if (a == b) {
      ans = "A and B are equal";
   }
   if (a < b) {
      ans = b + " is greater than " + a;
   }
   return ans;
} 
console.log("Question 49:");
console.log(compareNumbers(2, 6));
// Question 50
function findByProperty(array, prop, value) {
   for (i = 0; i < array.length; i++) {
      x = array[i];
      if (x[prop] == value) {
         ans = array[i];
      }
   }
   return ans;
} 
console.log("Question 50:");
console.log(findByProperty([{name: "apple", weight: 5}, {name: "banana", weight: 6}], "name", "banana"));
// Question 51
function sqrtArray(array) {
   newArray = [];
   for (i = 0; i < array.length; i++) {
      newArray.push(Math.sqrt(array[i]));
   }
   return newArray
} 
console.log("Question 51:");
console.log(sqrtArray([1, 4, 9, 16]));
// Question 52
function includesElement(array, element) {
   for (i = 0; i < array.length; i++) {
      if (array[i] == element) {
         return true;
      }
   }
   return false
}  
console.log("Question 52:");
console.log(includesElement([1, 2, 3, 4, 5], 3));
// Question 53
function allSame(array) {
   x = array[0];
   for (i = 1; i < array.length; i++) {
      if ( ! array[i] == x) {
         return false;
      }
   }
   return true;
}
console.log("Question 53:");
console.log(allSame(["apple", "apple", "apple"]));
// Question 54
function factorialize(num) {
   factorial = 1;
   for (i = num; i > 0; i--) {
      factorial = factorial * i;
   }
   return factorial;
} 
console.log("Question 54:");
console.log(factorialize(5));
// Question 55
function findIndexOfSmallest(array) {
   smallest = array[0];
   for (i = 1; i < array.length; i++) {
      if (array[i] < smallest) {
         smallest = array[i];
      }
   }
   index = array.indexOf(smallest);
   return index;
}
console.log("Question 55:");
console.log(findIndexOfSmallest([2, 3, 1, 4, 5]));
// Question 56
function symmetricDifference(array1, array2) {
  newArray = array1;
  blacklist = [];
   for (i = 0; i < array2.length; i++) {
    for (j = 0; j < array1.length; j++) {
      if (array2[i] == array1[j]) {
         blacklist.push(array2[i]);
      }
    }
    newArray.push(array2[i]);
   }
   for (i = 0; i < newArray.length; i++) {
      for (j = 0; j < blacklist.length; j++) {
         if (newArray[i] == blacklist[j]) {
            newArray.splice(i, 1);
            i -= 1;
         }
      }
   }
   return newArray;
}
console.log("Question 56:");
console.log(symmetricDifference([1, 2, 3, 4, 5], [4, 5, 6, 7, 8]));
// Question 57
function filterByWordLength(array, length) {
   newArray = [];
   for (i = 0; i < array.length; i++) {
      x = array[i].length;
      if (x == length) {
         newArray.push(array[i])
      }
   }
   return newArray;
}
console.log("Question 57:");
console.log(filterByWordLength(["apple", "pear", "kiwi", "banana"], 4));
// Question 58
function mapStringLengths(array) {
   newArray = [];
   for (i = 0; i < array.length; i++) {
      newArray.push(array[i].length);
   }
   return newArray;
} 
console.log("Question 58:");
console.log(mapStringLengths(["apple", "pear", "kiwi", "banana"]));
// Question 59
function sumOddFibs(num) {
   sum = 0;
   for (i = 0; i < num; i) {
      if (i == 0) {
         prev = i;
         i = 1;
      } else {
         prev1 = i;
         if ((i % 2) == 1) {
            sum += i;
         }
         i = i + prev;
         prev = prev1;
      }
   }
   return sum;
} 
console.log("Question 59:");
console.log(sumOddFibs(10));
// Question 60
function sumPrimes(num) {
   primes = [];
   for (i = 2; i < num; i++) {
      prime = true;
      for (j = 2; j < i; j++) {
         if (! ((i % j) > 0)) {
            prime = false;
         }
      }
      if (prime) {
         primes.push(i)
      }
   }
   sum = 0;
   for (i = 0; i < primes.length; i++) {
      sum += primes[i];
   }
   return sum;
} 
console.log("Question 60:");
console.log(sumPrimes(10));
// Question 61
function getPrimes(array) {
   newArray = [];
   for (i = 0; i < array.length; i++) {
      isPrime = true;
      end = false;
      x = array[i];
      if (x == 1) {
         isPrime = false;
         end = true;
      }
      if ((x % 2) == 0) {
         isPrime = false;
         end = true;
      }
      if (x == 2) {
         isPrime = true;
         end = true;
      }
      if (! end) {
         for (j = (x - 1); j > 1; j--) {
            if ((x % j) == 0) {
               isPrime = false;
            }
         }
         end = true;
      }
      if (isPrime) {
         newArray.push(x);
      }
   }
   return newArray;
} 
console.log("Question 61:");
console.log(getPrimes([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
// Question 62
function flatten1(array) {
   newArray = [];
   for (i = 0; i < array.length; i++) {
      for (j = 0; j < listX.length; j++) {
         newArray.push(array[i][j]);
      }
   }
   return newArray
} 
console.log("Question 62:");
console.log(flatten1([[1, 2, 3], [4, 5, 6]]));
// Question 63

console.log("Question 63:");
console.log();
// Question 64
function isSorted(array) {
   sorted = true;
   for (i = 0; (i < array.length - 1); i++) {
      if (array[i] > array[i + 1]) {
         sorted = false;
      }
   }
   return sorted;
} 
console.log("Question 64:");
console.log(isSorted([1, 2, 3, 4, 5]));
// Question 65
function multiplyArray(array, multiplier) {
   newArray = [];
   for (i = 0; i < array.length; i++) {
      product = array[i] * multiplier;
      newArray.push(product);
   }
   return newArray;
} 
console.log("Question 65:");
console.log(multiplyArray([1, 2, 3, 4, 5], 2));
// Question 66
function countInstances(array, value) {
   count = 0;
   for (i = 0; i < array.length; i++) {
      if (array[i] == value) {
         count += 1;
      }
   }
   return count;
}
console.log("Question 66:");
console.log(countInstances([1, 1, 2, 2, 2, 3, 3, 3, 3], 3));
// Question 67
function mergeSortArrays(arr1, arr2) {
   newArray = mergeArrays(arr1, arr2);
   result = bogoSortArray(newArray);
   return result;
} 
console.log("Question 67:");
console.log(mergeSortArrays([3, 2, 1], [6, 5, 4]));
// Question 68
function shiftElements(array) {
   x = array.shift();
   array.push(x);
   return array
}
console.log("Question 68:");
console.log(shiftElements([1, 2, 3, 4, 5]));
// Question 69
function countOccurrencesWithObject(array) {
   arrayElements = {};
   inList = [];
   for (i = 0; i < array.length; i++) {
      x = false; 
      element = array[i];
      for (j = 0; j < inList.length; j++) {
         if (inList[j] == element) {
            x = true;
         }
      }
      if (x == false) {
         inList.push(element);
         arrayElements[element] = 1;
      } 
      if (x == true) {
         arrayElements[element] += 1;
      }
   }
   return arrayElements;
}
console.log("Question 69:");
console.log(countOccurrencesWithObject(['apple', 'banana', 'apple', 'orange', 'banana', 'orange', 'orange']));
// Question 70
function spliceAndSlice(array, index, amount, insert) {
   array.splice(index, amount);
   for (i = (insert.length - 1); i >= 0; i--) {
      array.splice(index, 0, insert[i]);
   }
   return array;
}
console.log("Question 70:");
console.log(spliceAndSlice([1, 2, 3, 4, 5], 2, 2, ['a', 'b', 'c']));
// Question 71
function createRange(start, end) {
   newArray = [];
   for (i = start; i <= end; i++) {
      newArray.push(i);
   }
   return newArray;
}
console.log("Question 71:");
console.log(createRange(5, 9));
// Question 72
function lastElement(array) {
   ans = array.pop();
   return ans;
}
console.log("Question 72:");
console.log(lastElement([1, 2, 3, 4, 5]));
// Question 73
function uniqueValues(array) {
   newArray = [];
   newArray.push(array[0]);
   for (i = 1; i < array.length; i++) {
      x = false;
      for (j = 0; j < newArray.length; j++) {
         if (array[i] == newArray[j]) {
            x = true;
         }
      }
      if (! x) {
         newArray.push(array[i]);
      }
   }
   return newArray;
}
console.log("Question 73:");
console.log(uniqueValues([1, 2, 2, 3, 4, 4, 5, 5]));
// Question 74
function repeatString(string, times) {
   result = string;
   for (i = 1; i < times; i++) {
      result = result + string;
   }
   return result;
}
console.log("Question 74:");
console.log(repeatString("apple", 3));
// Question 75
function isPalindromeString(string) {
   array = string.split(" ") 
   newArray = [];
   for (i = 0; i < (array.length / 2); i++) {
      newArray.push(array[i]);
   }
   newArray2 = [];
   for (i = (array.length - 1); i > ((array.length / 2) - 1); i--) {
      newArray2.push(array[i]);
   }
   x = true;
   for (i = 0; i < newArray.length; i++) {
      if (! newArray[i] == newArray2) {
         x = false;
      }
   }
   return x;
}
console.log("Question 75:");
console.log(isPalindromeString("madam"));
// Question 76
function pigLatin(string) {
   strings = string.split(" ");
   for (i = 0; i < strings.length; i++) {
      array = strings[i].split("");
      x = array.shift();
      array.push(x);
      array.push("ay");
      word = array.join("");
      strings[i] = word;
   }
   result = strings.join(" ");
   return result;
}
console.log("Question 76:");
console.log(pigLatin("pig latin translator"));
// Question 77
function longestString(array) {
   longest = array[i];
   for (i = 1; i < array.length; i++) {
      if (array[i].length > longest.length) {
         longest = array[i];
      }
   }
   return longest;
}
console.log("Question 77:");
console.log(longestString(['short', 'medium', 'longest', 'longer']));
// Question 78
function findAverage(array) {
   sum = 0;
   for (i = 0; i < array.length; i++) {
      sum = array[i] + sum;
   }
   avg = sum / array.length;
   return avg
}
console.log("Question 78:");
console.log(findAverage([1, 2, 3, 4, 5]));
// Question 79
function findMissing(array) {
   array = sortArray(array);
   missing = [];
   num = array[0];
   for (i = 0; i < array.length; i++) {
      if (! (num == array[i])) {
         missing.push(num);
         i -= 1;
      }
      num += 1;
   }
   return missing;
}
console.log("Question 79:");
console.log(findMissing([1, 2, 6, 9, 11, 16, 5]));
// Question 80
function largestInSubArray(array) {
   largests = [];
   for (i = 0; i < array.length; i++) {
      x = array[i];
      largest = x[0];
      for (j = 1; j < x.length; j++) {
         if (x[j] > largest) {
            largest = x[j];
         }
      }
      largests.push(biggest);
   }
   return largests;
}
console.log("Question 80:");
console.log(largestInSubArray([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
// Question 81
function reverseInPlace(array) {
   for (i = array.length; i > 0; i--) {
      x = array.splice(i - 1, 1);
      array.push(x[0]);
   }
   return array;
}
console.log("Question 81:");
console.log(reverseInPlace([1, 2, 3, 4, 5]));
// Question 82
function sumAll(array) {
   sum = 0;
   for (i = 0; i < array.length; i++) {
      sum = sum + array[i];
   }
   return sum
} 
console.log("Question 82:");
console.log(sumAll([1, 2, 3, 4, 5]));
// Question 83
function findLongestWordLength(string) {
   newArray = string.split(" ");
   longest = 1;
   for (i = 0; i < newArray.length; i++) {
      x = newArray[i].length;
      if (x > longest) {
         longest = x;
      }
   }
   return longest;
}
console.log("Question 83:");
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
// Question 84
function replaceElement2(array, element, replacement) {
   indexes = [];
   for (i = 0; i < array.length; i++) {
      if (array[i] == element) {
         indexes.push(i);
      }
   }
   for (i = 0; i < indexes.length; i++) {
      array[indexes[i]] = replacement;
   }
   return array;
}
console.log("Question 84:");
console.log(replaceElement2([1, 2, 3, 2, 1], 1, 'one'));
// Question 85
function squareInPlace(array) {
   for (i = 0; i < array.length; i++) {
      sq = array[i] * array[i];
      array[i] = sq;
   }
   return array;
}
console.log("Question 85:");
console.log(squareInPlace([1, 2, 3, 4, 5]));
// Question 86
function findMax(array) {
   max = array[0];
   for (i = 1; i < array.length; i++) {
      if (array[i] > max) {
         max = array[i];
      }
   }
   return max;
}
console.log("Question 86:");
console.log(findMax([1, 2, 3, 4, 5]));
// Question 87
function convertToFahrenheit(celsius) {
   fahrenheit = (celsius * 9/5) + 32;
   return fahrenheit;
}
console.log("Question 87:");
console.log(convertToFahrenheit(30));
// Question 88
function caesarCipher(text, shift) {
   code = text.split("");
   abc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
   x = true;
   for (i = 0; i < code.length; i++) {
      for (j = 0; j < abc.length; j++) {
         if (x) {
            if (code[i] == abc[j]) {
            code[i] = abc[j + shift];
            x = false;
            }
         }
      }
      x = true;
   }
   abcap = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
   x = true;
   for (i = 0; i < code.length; i++) {
      for (j = 0; j < abcap.length; j++) {
         if (x) {
            if (code[i] == abcap[j]) {
            code[i] = abcap[j + shift];
            x = false;
            }
         }
      }
      x = true;
   }
   code = code.join("");
   return code;
} 
console.log("Question 88:");
console.log(caesarCipher('Hello World', 1));
// Question 89
function titleCase(sentence) {
   words = sentence.split(" ");
   for (i = 0; i < words.length; i++) {
      wordsx = words[i].split("");
      wordsx[0] = wordsx[0].toUpperCase();
      words[i] = wordsx.join("");
   }
   sentence = words.join(" ");
   return sentence;
}
console.log("Question 89:");
console.log(titleCase("i'm a little tea pot"));
// Question 90 
function countCards(cardSequence) {
   toReturn = [];
   value = -1;
   for (i = 0; i < cardSequence; i++) {
      if (cardSequence == 10 || cardSequence == "J" || cardSequence == "Q" || cardSequence == "K" || cardSequence == "A") {
         value -= 1;
      }
      if (cardSequence == 2 || cardSequence == 3 || cardSequence == 4 || cardSequence == 5 || cardSequence == 6) {
         value += 1
      }
      if (cardSequence < 6 && cardSequence > 10) {
         value = value
      }
   }
   if (value > 0) {
      toReturn.push("Bet")
   }
   if (value <= 0) {
      toReturn.push(value) 
      toReturn.push("Hold")
   }
   return toReturn
}
console.log("Question 90:");
console.log(countCards(["A", "3", "K", "7", "5", "8", "9"]));
// Question 91
function validateUSTelephoneNumber(number) {
   sections = number.split("-");
   if (! (sections.length == 3)) {
      return false;
   }
   if (! (sections[0].length == 3)) {
      return false;
   }
   if (! (sections[1].length == 3)) {
      return false;
   }
   if (! (sections[2].length == 4)) {
      return false;
   }
   return true;
} 
console.log("Question 91:");
console.log(validateUSTelephoneNumber("555-555-5555"));
// Question 92 
function pairElement(str) {
   dna = str.split("");
   pairs = [];
   for (i = 0; i < dna.length; i++) {
      if (dna[i].toUpperCase() == "A") {
         pairs.push(["A", "T"])
      }
      if (dna[i].toUpperCase() == "T") {
         pairs.push(["T", "A"])
      }
      if (dna[i].toUpperCase() == "C") {
         pairs.push(["C", "G"])
      }
      if (dna[i].toUpperCase() == "G") {
         pairs.push(["G", "C"])
      }
   }
   return pairs;
} 
console.log("Question 92:");
console.log(pairElement("GCG"));
// Question 93
function missingLetters(str) {
   abc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
   list = str.split("");
   missing = [];
   for (i = 0; i < abc.length; i++) {
      if (abc[i] == list[0].toUpperCase()) {
         x = i;
      }
   }
   y = 0
   for (i = 0; i < list.length; i++) {
      letter = list[i + y].toUpperCase();
      if (! (abc[i + x] == letter)) {
         missing.push(abc[i + x]);
         y -= 1
         // list.splice(i, 0, abc[i + x]);
      } 
   }
   return missing;
} 
// *** ALSO WORKS *** (unless I accidentally deleted something inmportant or left something unwanted in)
// function missingLetters(str) {
//    abc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
//    list = str.split("");
//    missing = [];
//    for (i = 0; i < abc.length; i++) {
//       if (abc[i] == list[0].toUpperCase()) {
//          x = i;
//       }
//    }
//    for (i = 0; i < list.length; i++) {
//       letter = list[i].toUpperCase();
//       if (! (abc[i + x] == letter)) {
//          missing.push(abc[i + x]);
//          list.splice(i, 0, abc[i + x]);
//       } 
//    }
//    return missing;
// } 
console.log("Question 93:");
console.log(missingLetters("bcfhiklmn"));
// Question 94
function uniteUnique(arr) {
   newArray = [];
   for (i = 0; i < arr.length; i++) {
      x = arr[i];
      for (j = 0; j < x.length; j++) {
         killSwitch = false;
         for (k = 0; k < newArray.length; k++) {
            if (x[j] == newArray[k]) {
               killSwitch = true;
            }
         }
         if (killSwitch == false) {
            newArray.push(x[j]);
         }
      }
   }
   return newArray
} 
console.log("Question 94:");
console.log(uniteUnique([[1, 3, 2], [5, 2, 1, 4], [2, 1]]));
// Question 95
function convertEntities(str) {
   entities = str.split("");
   for (i = 0; i < entities.length; i++) {
      entity = entities[i];
      if (entity == "&") {
         entities[i] = "&amp;"
      } else if (entity == "<") {
         entities[i] = "&lt;"
      } else if (entity == ">") {
         entities[i] = "&gt;"
      } else if (entity == '"') {
         entities[i] = "&quot;"
      }
   }
   str = entities.join("");
   return str;
} 
console.log("Question 95:");
console.log(convertEntities("Dolce & Gabbana"));
// Question 96
function spinalCase(str) {
   words = str.split(" ");
   for (i = 0; i < words.length; i++) {
      words[i] = words[i].toLowerCase();
   }
   spinal = words.join("-");
   return spinal;
}     
console.log("Question 96:");
console.log(spinalCase("This Is Spinal Tap"));
// Question 97
function translatePigLatin(str) {
   pig = str.split(" ");
   for (i = 0; i < pig.length; i++) {
      word = pig[i].split("");
      x = word.length;
      word.pop(word.length - 1);
      word.pop(word.length - 1);
      y = word.pop(word.length - 1);
      word.unshift(y);
      pig[i] = word.join("");
   }
   return pig.join(" ");
} 
console.log("Question 97:");
console.log(translatePigLatin("aliforniacay"));
// Question 98
function myReplace(str, before, after) {
   words = str.split(" ");
   for (i = 0; i < words.length; i++) {
      if (words[i] == before) {
         words[i] = after;
      }
   }
   return words.join(" ")
} 
console.log("Question 98:");
console.log(myReplace('Let us go to the store', 'store', 'mall'));
// Question 99 
function binaryAgent(str) {
   binaryStrings = str.split(" ");
   decimals = [];
   for (i = 0; i < binaryStrings.length; i++) {
      decimals.push(parseInt(binaryStrings[i], 2));
   }
   ascii = ["NUL","SOH","STX","ETX","EOT","ENQ","ACK","BEL","BS","HT","LF","VT","FF","CR","SO","SI","DLE","DC1","DC2","DC3","DC4","NAK","SYN","ETB","CAN","EM","SUB","ESC","FS","GS","RS","US"," ","!",'"',"#","$","%","&","’","(",")","*","+",",","-",".","/","0","1","2","3","4","5","6","7","8","9",":",";","<","=",">","?","@","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","[","\\","]","^","_","`","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","","y","z","{","|","}","~","DEL"];
   letters = [];
   for (i = 0; i < decimals.length; i++) {
      letters.push(ascii[decimals[i]]);
   }
   sentence = letters.join("");
   return sentence;
} 
console.log("Question 99:");
console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00111111"));
// Question 100
function truthCheck(collection, pre) {
   x = true
   for (i = 0; i < collection.length; i++) {
      if (! (collection[i][pre] === "male")) {
         x = false;
      }
   }
   return x;
}
console.log("Question 100:");
console.log(truthCheck([{ "user": "Tinky-Winky", "sex": "male" }, { "user": "Dipsy", "sex": "male" }], "sex"));
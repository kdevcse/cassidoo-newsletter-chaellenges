// Challenge: Given an unsorted array of integers and a number n, find the subarray of length n that has the largest sum.
// Environment: Node.js v.16.14.2
// Coded By: Kevin (KSlugs)

function largestSubarraySum(arr, subarrLength) {
  let largestSum = 0;
  let largestSumArray = [];
  
  for(let i = 0; i < arr.length - (subarrLength - 1); i++) {
    let sum = 0;
    let sumArr = [];

    for(let j = 0; j < subarrLength; j++) {
      sum += arr[i + j];
      sumArr.push(arr[i + j]);
    }

    if (sum <= largestSum)
      continue;

    largestSum = sum;
    largestSumArray = sumArr;
  }

  return largestSumArray;
}

//Program start
const arrInput = [3,1,4,1,5,9,2,6]; //Modify
const subArrLengthInput = 3; //Modify

const largestSubarray = largestSubarraySum(arrInput, subArrLengthInput);

console.log(largestSubarray);

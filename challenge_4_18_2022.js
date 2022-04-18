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
const arrInput = [3,1,4,1,5,9,2,6,1,2,3]; //Modify
const subArrLengthInput = 4; //Modify

const largestSubarray = largestSubarraySum(arrInput, subArrLengthInput);

console.log(largestSubarray);
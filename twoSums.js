/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {

  return hashtable(nums, target);
  return bruteForce(nums,target)

  // let [f, l] = [0, nums.length-1]
  // const sorted = nums.sort().reverse()
  // let sum=0

  // while(f<l){
  //     sum = sorted[f] + sorted[l]
  //     switch (true) {
  //         case sum > target:
  //             f+=1
  //             break;
  //         case sum < target:
  //             l-=1
  //             break;

  //         default:
  //             return[f, l];
  //     }
  //     // if ( sum < target) {
  //     //     l-=1
  //     // }
  //     // if(sum>target){
  //     //     f+=1
  //     // }

  // }
};
function hashtable1(nums, target){
    
}

const res = twoSum([2, 7, 11, 15], 9);
console.log("res", res);


function hashtable(nums, target) {
  /*Hash table*/
  debugger;
  const map = new Map();
  const len = nums.length;

  // for (let i=0; i< len; i++){
  //     map.set(nums[i], i)
  // }
  for (let i = 0; i < len; i++) {
    if (map[nums[i]] >= 0) {
      return [map[nums[i]], i];
    }
    map[target - nums[i]] = i;
  }
//   console.log("map obj", map);
  return [];
}
function bruteForce(nums, target){
      /**Brute force solution */
  for(let i =0; i<=nums.length; i++){
      for(let j=0; j<=nums.length ; j++){
          if(i !==j){
              if(nums[i] + nums[j] === target){
                  return [i, j]
              }
          }
      }
  }
}
/**
 * Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 */

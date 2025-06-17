/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    let start = nums[0];
    const ranges = [];
    for(let i=0; i<nums.length; i++){
     let num = nums[i];//1, //
     const eval = Number.isInteger(nums[i+1]) && num+1 === nums[i+1]
     console.log(eval)
    //  console.log(num+1 === nums[i+1])
     if(nums[i+1] && num+1 === nums[i+1] ){
     
         continue;
     } else{
         const diff = num - start;
         if(diff>0){
              ranges.push(`${start}->${num}`);
         } else{
             ranges.push(`${start}`);
         }
         start=nums[i+1];
     }
     console.log(ranges)
    } 
 
    return ranges;
 };

const nums = [-1,0,2,9];
const nums2 = [0,2,3,4,6,8,9]
summaryRanges(nums)
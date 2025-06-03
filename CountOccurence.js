function countOccurences(arr, num){
    let count=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]===num){
            count++;
            
            }
    }
    return count;
    
}
let arr=[1,2,2,3,3,3,4,4,4,4];
let num=4;
let occurence=countOccurences(arr, num);
console.log(`The number ${num} occurs ${occurence} in the array `);
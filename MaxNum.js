var arr= new Array();
var arr= new Array(1,2,3,4,5,6,7,8,9,0);
var max=findMax(arr);
console.log("The largest number in an array is: "+ max);
function findMax(arr) {
    var max=arr[0];
    for(var i=1; i<arr.length; i++) {
        if(arr[i]>max){
            max=arr[i];
        }
        
    }
    return max;
}
function evenFilter(array){
     let evenArray=[];
    for(let i=0;i<array.length;i++){
        if((array[i]%2)===0){
          
            evenArray.push(array[i]);


        // evenArray= parseInt(console.log(`${array[i]}`));  
          // return evenArray[`${i+1}`];
        }
    }
    return evenArray ;
}

let array=[1,12,3,14,5,16,7,18,9,20,22];
// console.log('The new array of even elements are:');
evenArray=evenFilter(array);
console.log('The new array of even elements are   newArray=', evenArray);







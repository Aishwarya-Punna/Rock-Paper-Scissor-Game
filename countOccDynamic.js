/* const prompt=require('prompt-sync')();

function countOccurence(arr,num){
    let count=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]===num){
            count++;
        }
    }
    return count;
}

let size=parseInt(prompt(`Enter the size of an array:`));
let arr=[];
for(let i=0;i<size;i++){
    let elements=parseInt(prompt(`Declare the array ${i+1} elements:`))
    arr.push(elements);
}

let num=parseInt(prompt(`Enter the number to be count in an array:`));
let occurence=countOccurence(arr,num);
console.log(`The number ${num} to occurs ${occurence} in an array is:`);



*/
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function countOccurences(arr, num) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            count++;
        }
    }
    return count;
}

// Take input from the user
rl.question('Enter the length of the array: ', (arrayLength) => {
    arrayLength = parseInt(arrayLength);
    let array = [];
    let index = 0;

    function askForArrayElements() {
        if (index < arrayLength) {
            rl.question(`Enter element ${index + 1}: `, (element) => {
                array.push(parseInt(element));
                index++;
                askForArrayElements();
            });
        } else {
            rl.question('Enter the number to count in the array: ', (num) => {
                num = parseInt(num);
                let occurence = countOccurences(array, num);
                console.log(`The number ${num} occurs ${occurence} times in the array.`);
                rl.close();
            });
        }
    }

    askForArrayElements();
});

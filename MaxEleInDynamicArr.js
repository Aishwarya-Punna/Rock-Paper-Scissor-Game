const readline= require('readline');

const rl=readline.createInterface({
                        
                        input: process.stdin,
                        output:process.stdout });

rl.question('Enter the size of the array: ', (noOfElements) => {
    
    console.log("The size of an array is "+ noOfElements)

        rl.question("Enter number of elements(comma-separated):" ,(listOfElements) =>{
                                                                            
                                                        let array= listOfElements.split(',').map(Number);
        
                                                        console.log("The array of elements are:" +array);
    
                                                        let max=array[0];
    
                                                        function findMax(array){
        
                                                            if(array.length===0){
            
                                                                return;
        
                                                            }
        
                                                            for(let i=1;i<array.length;i++){
            
                                                                if(array[i]>max){
                
                                                                    max=array[i];
                                                                }
                                                            }
                                                        return max;
                                                    }
                                                
                                                    let maximum= findMax(array);
    
                                                    console.log("Maximum element from an array is:"+ maximum);
    rl.close();

        }); 
    
});
    
    
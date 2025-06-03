const result=document.getElementById('result');

function appendToDisplay(input){
result.value+=input;
}

function clearDisplay(){

    result.value="0";
}

function calculate(){
    try{
    result.value=eval(result.value);
    }
    catch(error){
        result.value="Error";
    }
}
function deleteLastEle(){
    result.value=result.value.substring(0,result.value.length-1);
}
// const addNewTask=document.getElementById("click", function(){
//     addNewTask.innerText ="Adding New Task!";
// });
// console.log(addNewTask); 
const btn1=document.getElementById("btn1");
console.log(btn1);
btn1.addEventListener("click", function(){
    const addNewTask=document.createElement("li");
    addNewTask.textContent="Adding New Task!";
    const list=document.getElementById("list");
list.appendChild(addNewTask)});




// btn2.addEventListener("click", function(){
//     const deleteTask=document.createElement("li");
//     deleteTask.textContent="Deleting the Task!";
//     const list=document.getElementById("list");
//     list.removeChild(deleteTask);
// });
const btn2=document.getElementById("btn2");
console.log(btn2);
 btn2.addEventListener("click",function(){
    const list=document.getElementById("list");
    if(list.lastChild){
        list.removeChild(list.lastChild);
    }
    else{
        console.log("No tasks are there to delete!");
    }
});
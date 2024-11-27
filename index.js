const input = document.getElementById("input");
const button = document.getElementsByClassName("remove-task");
const ul = document.getElementById("task");


function addTask(){
    if(input.value !== 0){
        const inputValue = input.value;
        // const createButton = document.createElement('button').textContent= 'remove';
        creatingListItem = document.createElement('li');
        creatingListItem.textcontent = inputValue;
        ul.appendChild(creatingListItem);
        ul.textcontent = `<li>${inputValue} <button>${button}</button></li>`;
    }
    else{
        console.log("error");
    }
    
}

function removeTask(){

}


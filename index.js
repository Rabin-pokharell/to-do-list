const input = document.getElementById("input");
const button = document.getElementsByClassName("remove-task");
const ul = document.getElementById("task");


function addTask(){
    if(input.value !== 0){
        const inputValue = input.value;
        const createButton = document.createElement('button');
        createButton.textContent= 'remove';
        creatingListItem = document.createElement('li');
        creatingListItem.textContent = inputValue;
        ul.appendChild(creatingListItem);
        ul.appendChild(createButton);
        ul.textcontent = `<li>${inputValue} <button>${createButton}</button></li>`;;
    }
    else{
        console.log("error");
    }
    
}

function removeTask(){

}


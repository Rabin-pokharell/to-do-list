const input = document.getElementById("input");
const button = document.getElementsByClassName("remove-task");
const ul = document.getElementById("task");
const addButton = document.getElementById("add-button");


function addTask(){
    if(input.value !== 0){
        const inputValue = input.value;
        const createButton = document.createElement('button');
        const creatingListItem = document.createElement('li');

        createButton.textContent= 'remove';
        creatingListItem.textContent = inputValue;

        if(inputValue === ''){
            console.log("error");
        }
        else{
            ul.appendChild(creatingListItem);
            ul.appendChild(createButton);
            ul.textcontent = `<li>${inputValue} <button>${createButton}</button></li>`;
            input.value = '';
        }
    }
    else{
        console.log("error");
    }
}

function removeTask(){

}


const input = document.getElementById("input");
const ul = document.getElementById("task");




function addTask(){
    if(input.value !== 0){
        const inputValue = input.value;
        const createButton = document.createElement('button');
        const creatingListItem = document.createElement('li');


        createButton.id = "remove";
        // createButton.onClick = removeTask();
        createButton.textContent= 'remove';
        creatingListItem.textContent = inputValue;

        createButton.addEventListener("click", () => {
            ul.removeChild(creatingListItem);
        })

        createButton.addEventListener("mouseover", () => {
            createButton.style.backgroundColor= "hsl(2, 83%, 45%)";
            const audio= new Audio("")
        })

        createButton.addEventListener("mouseout", () => {
            createButton.style.backgroundColor= "hsl(2, 83%, 55%)";
        })
        
        if(inputValue === ''){
            console.log("error");
        }
        else{
            ul.appendChild(creatingListItem);
            creatingListItem.appendChild(createButton);
            // ul.textcontent = `<li>${creatingListItem} <button>${createButton}</button></li>`;    
            input.value = '';
        }
    }
    else{
        console.log("error");
    }
    
}

input.addEventListener('keypress', event => {
    if(event.key === 'Enter'){
        addTask();
    }
});


    


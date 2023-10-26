const myArray = [];
function addToList() {
    const input = document.querySelector('.js-item')
    const dateInput = document.querySelector('.js-due-date')
    vals = {name: input.value, dueDate: dateInput.value}
    myArray.push(vals)
    console.log(myArray)
    viewOnPage(myArray)

    input.value = ''
}

function viewOnPage() {
    outputElement = document.querySelector('.js-list-items')
    html = ``
    for(let i = 0; i < myArray.length; i++){
        html += `<div>${myArray[i].name}</div>
        <div>${myArray[i].dueDate}</div>
        <button onClick = "
            myArray.splice(${i},1);
            viewOnPage();
        " class="delete-todo-button">Delete</button>`
    }
    outputElement.innerHTML = html
}

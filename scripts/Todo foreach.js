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

    myArray.forEach((obj, index) => {
        html += `<div>${obj.name}</div>
        <div>${obj.dueDate}</div>
        <button onClick = "
            myArray.splice(${index},1);
            viewOnPage();
        " class="delete-todo-button">Delete</button>`
    });
    for(let i = 0; i < myArray.length; i++){
        
    }
    outputElement.innerHTML = html
}

const input = document.querySelector('input');
const addButton = document.getElementById('addButton');
const section = document.getElementById('data');

const addFunction = () => {
    const div = document.createElement('div')
    const p = document.createElement('p')
    const deleteButton = document.createElement('button')
    p.innerHTML = input.value
    deleteButton.innerHTML = 'delete'
    if (input.value.trim() === '') alert('empty string')
    else {
        section.append(div)
        div.append(p, deleteButton);
        input.value = '';
    }
}

const otherFunction = (e) => {
    if (e.target.tagName === 'BUTTON') e.target.parentElement.remove();
    else if (e.target.tagName === 'P') e.target.style.textDecoration = 'line-through';
}

addButton.addEventListener('click', addFunction);
section.addEventListener('click', otherFunction)
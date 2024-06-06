const input = document.querySelector('input');
const addButton = document.querySelector('button');
const section = document.querySelector('section');

const addFunction = () => {
    const div = document.createElement('div')
    const p = document.createElement('p')
    const deleteButton = document.createElement('button')
    deleteButton.innerHTML = 'delete'
    p.innerHTML = input.value
    if (input.value.trim() === '') alert('error')
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

const press = (e) => e.key === 'Enter' && addFunction();
addButton.addEventListener('click', addFunction);
input.addEventListener('keydown', press);
section.addEventListener('click', otherFunction)
const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder');

item.addEventListener('dragstart', dragstart);
item.addEventListener('dragend', dragend);

for (const placeholder of placeholders) {
    placeholder.addEventListener('dragover', dragover);
    placeholder.addEventListener('dragenter', dragenter);
    placeholder.addEventListener('dragleave', dragleave);
    placeholder.addEventListener('drop', dragdrop);
}

function dragstart(event) {
    console.log('dragstart', event.target);
    event.target.classList.add('hold');
    setTimeout(() => event.target.classList.add('hide'), 0);
    item.textContent = 'Я передумал!';
}

function dragend(event) {
    event.target.classList.remove('hold', 'hide');
    item.textContent = 'Перетащи меня';
}

function dragover(event) {
    event.preventDefault();
}

function dragenter(event) {
    event.target.classList.add('hovered');
}

function dragleave(event) {
    event.target.classList.remove('hovered');
}

function dragdrop(event) {
    event.target.classList.remove('hovered');
    event.target.append(item);
}
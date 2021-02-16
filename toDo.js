const toDoForm = document.querySelector('.toDoForm');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.querySelector('.toDoList');

const TODOS_LS = 'toDos';

function paintToDo(text) {
  const li = document.createElement('li');
  const delBtn = document.createElement('button');
  delBtn.innerText = '삭제';
  const span = document.createElement('span');
  span.innerText = text;
  li.appendChild(delBtn);
  li.appendChild(span);
  toDoList.appendChild(li);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  console.log(currentValue);
  paintToDo(currentValue);
  toDoInput.value = null;
}

function init() {
  const toDos = localStorage.getItem(TODOS_LS);
  if(toDos !== null) {

  }
  toDoForm.addEventListener('submit', handleSubmit);
}

init();
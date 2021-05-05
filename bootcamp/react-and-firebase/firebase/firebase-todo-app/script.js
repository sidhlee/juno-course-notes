import process from '../../../../env.js';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: process.env.FIREBASE_TODO_API,
  authDomain: 'bootcamp-todo-app.firebaseapp.com',
  projectId: 'bootcamp-todo-app',
  storageBucket: 'bootcamp-todo-app.appspot.com',
  messagingSenderId: '453152108295',
  appId: '1:453152108295:web:ed4347429006514b489fa2',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.database().ref();

const formElement = document.querySelector('form');
const ulElement = document.querySelector('ul');

formElement.addEventListener('submit', function (event) {
  // When the form is submitted...
  // don't actually submit the form
  event.preventDefault();

  // get the task from the input
  const inputElement = document.querySelector('input');
  const task = inputElement.value;
  console.log(task);

  // if there is a task...
  if (task) {
    const todoObj = {
      description: task,
    };

    console.log(todoObj);

    db.push(todoObj);

    // clear the input field to an empty string
    inputElement.value = '';
  }
});

// listener will run immediately when registered, then execute on value event (database mutated)
db.on('value', (snapshot) => {
  console.log(snapshot.val());

  const todoData = snapshot.val();
  const todoArray = Object.entries(todoData).map(([key, val]) => ({
    key,
    ...val,
  }));

  // clear ul
  ulElement.replaceChildren();
  todoArray.forEach((todo) => {
    // add the task as a list-item
    const listItemElement = document.createElement('li');
    listItemElement.innerHTML = `<i id="${todo.key}" class="far fa-square"></i>`;
    listItemElement.appendChild(document.createTextNode(todo.description));

    // add the new list-item element as a child to the unordered list
    const ulElement = document.querySelector('ul');
    ulElement.appendChild(listItemElement);
  });
});

ulElement.addEventListener('click', function (event) {
  if (event.target.tagName === 'I') {
    // tasks to perform
    updateToDo(event.target);

    removeTodo(event.target);
  }
});

function updateToDo(iElement) {
  iElement.classList.toggle('fa-square');
  iElement.classList.toggle('fa-check-square');
  iElement.parentElement.classList.toggle('text-muted');
}

function removeTodo(iElement) {
  const todoKey = iElement.id;
  firebase.database().ref(`/${todoKey}`).remove();
}

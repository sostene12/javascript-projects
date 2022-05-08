//todo list project using javascript
const list = document.querySelector(".todos");
const addForm = document.querySelector(".add");
const search = document.querySelector(".search input");

const generateTemplate = (todo) => {
  const html = `
  <li class="list-group-item d-flex justify-content-between align-items-center text-light">
  <span>${todo}</span>
  <i class="far fa-trash-alt delete"></i>
</li>
  `;
  list.innerHTML += html;
};

// adding todos
addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const todo = addForm.add.value.trim();
  if (todo.length) {
    generateTemplate(todo);
    addForm.reset();
  }
});

// deleting todos
list.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});

// search fuction
const filterTodos = (term) => {
  // add a class when  don't matches
  Array.from(list.children)
    .filter((todo) => {
      return !todo.textContent.toLocaleLowerCase().includes(term);
    })
    .forEach((todo) => {
      todo.classList.add("filtered");
    });

  // removing classname if they match
  Array.from(list.children)
    .filter((todo) => {
      return todo.textContent.toLocaleLowerCase().includes(term);
    })
    .forEach((todo) => {
      todo.classList.remove("filtered");
    });

  return true;
};

// Search by keyup event
search.addEventListener("keyup", () => {
  const term = search.value.trim().toLowerCase();
  filterTodos(term);
});

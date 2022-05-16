const list = document.querySelector("ul");
const form = document.querySelector("form");
const button = document.querySelector("button");

function addListItem(recipe, id) {
  let time = recipe.created_at.toDate();
  let html = `
  <li data-id="${id}">
    <div>${recipe.title}</div>
    <div>${time}</div>
    <butto class="delete btn btn-danger btn-sm my-2">Delete</button>
  </li>
  `;
  list.innerHTML += html;
}

const deleteRecipe = (id) => {
  const recipes = document.querySelectorAll("li");
  recipes.forEach((recipe) => {
    if (recipe.getAttribute("data-id") === id) {
      recipe.remove();
    }
  });
};

// get all recipes
// REAL TIME LISTENERS ON ANY CHANGE OF CONTENTS
const unsub = db.collection("reacipes").onSnapshot((snapshot) => {
  snapshot.docChanges().forEach((change) => {
    const doc = change.doc;
    console.log(change);
    if (change.type === "added") {
      addListItem(doc.data(), doc.id);
    } else if (change.type === "removed") {
      deleteRecipe(doc.id);
    }
  });
});

// add documents
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const now = new Date();
  const recipe = {
    title: form.recipe.value,
    created_at: firebase.firestore.Timestamp.fromDate(now),
    author: "NG Sostene",
  };
  db.collection("reacipes")
    .add(recipe)
    .then(() => console.log("recipe added"))
    .catch((error) => console.log(error));
});

// deleting data
list.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    const id = e.target.parentElement.getAttribute("data-id");
    db.collection("reacipes")
      .doc(id)
      .delete()
      .then(() => console.log("item deleted"))
      .catch((error) => console.log(error));
  }
});

// unsubscribing from changes
button.addEventListener("click", () => {
  unsub();
  console.log("unsubscribed from changes");
});

let inputData = document.getElementById("inputData");
let addElement = document.getElementById("addElement");
let mainn = document.getElementById("mainn");
let data = document.getElementById("data");
let tCount = document.getElementById("tCount");
let todoList = document.getElementById("todoList");

function insert() {
  if (inputData.value === "") {
    alert("please enter your todo");
  } else {
    let todo = document.createElement("li");
    todo.textContent = inputData.value;

    data.insertBefore(todo, todoList);
    tasksCompletion();
    let editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.onclick = editElement;
    data.insertBefore(editBtn, todoList);

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = deleteElement;
    data.insertBefore(deleteBtn, todoList);

    let boldBtn = document.createElement("button");
    boldBtn.textContent = "B";

    boldBtn.onclick = boldElement;
    data.insertBefore(boldBtn, todoList);

    let italicBtn = document.createElement("button");
    italicBtn.textContent = "I";

    italicBtn.onclick = italicElement;
    data.insertBefore(italicBtn, todoList);

    let underlineBtn = document.createElement("button");
    underlineBtn.textContent = "U";

    underlineBtn.onclick = underlineElement;
    data.insertBefore(underlineBtn, todoList);

    let completeBtn = document.createElement("button");
    completeBtn.textContent = "Completed";

    completeBtn.onclick = completeElement;
    data.insertBefore(completeBtn, todoList);

    inputData.value = "";
    function deleteElement() {
      data.removeChild(todo);
      data.removeChild(deleteBtn);
      data.removeChild(editBtn);
      data.removeChild(boldBtn);
      data.removeChild(italicBtn);
      data.removeChild(completeBtn);
      data.removeChild(underlineBtn);
      tasksCompletion();
    }
    function editElement() {
      addElement.textContent = "Edit";
      addElement.id = "editedElement";
      let editedElement = document.getElementById("editedElement");
      // console.log(editedElement);
      editedElement.onclick = addEditedElement;
      inputData.value = todo.textContent;
    }
    function addEditedElement() {
      addElement.id = "addElement";
      addElement.onclick = insert;
      todo.textContent = inputData.value;
      addElement.textContent = "Add";
      inputData.value = "";
    }
    function boldElement() {
      todo.style.fontWeight = "bold";
      boldBtn.style.backgroundColor = "rgba(0, 0, 255, 0.358)";
    }
    function italicElement() {
      todo.style.fontStyle = "italic";
      italicBtn.style.backgroundColor = "rgba(0, 0, 255, 0.358)";
    }
    function underlineElement() {
      todo.style.textDecoration = "underline";
      underlineBtn.style.backgroundColor = "rgba(0, 0, 255, 0.358)";
    }

    function completeElement() {
      completeBtn.style.backgroundColor = "rgba(0, 0, 255, 0.358)";

      todo.style.color = "tomato";
      todo.style.textDecoration = "line-through";
      tasksCompletion();
    }
  }

  function tasksCompletion() {
    let count = 0;

    const elements = data.querySelectorAll("li");
    const eCount = elements.length;
    elements.forEach((element) => {
      if (element.style.color === "tomato") {
        count++;
      }
    });
    tCount.textContent = count + "/" + eCount;
    if (count === eCount) {
      tCount.textContent = "Completed All your tasks 👏👏";
    }
  }
}
// console.log(inputData);

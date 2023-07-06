// import { Btn } from "../JS/index.js";
import { deleteTask, get, post, updateTask } from "./api.js";

let vacio = document.querySelector(".vacio");
var contador = document.querySelector("#contador");

async function addTask(e) {
  let input = document.querySelector("input");
  e.preventDefault();

  let text = input.value.trim();

  if (text !== "") {
    let tasks = {
      task: text,
    };
    let postResponse = await post(tasks);
    createTask(postResponse.id, postResponse.task, postResponse.checked);
    input.value = "";
  } else {
    window.alert("Ingresar texto");
  }
}

function createTask(id, text, checked) {
  let ul = document.querySelector("ul");
  const li = document.createElement("li");
  const parrafo = document.createElement("p");

  parrafo.textContent = text;
  li.id = id;

  ul.appendChild(li);
  li.appendChild(checkbox(checked));
  li.appendChild(parrafo);
  li.appendChild(Delete());
  vacio.style.display = "none";
}

async function cargarTask() {
  let tareas = await get();
  let actualizarContador = 0;

  tareas.forEach((Tarea) => {
    createTask(Tarea.id, Tarea.task, Tarea.checked);
  });

  for (let i = 0; i < tareas.length; i++) {
    if (tareas[i].checked == true) {
      actualizarContador++;
    }
  }
  contador.innerHTML = actualizarContador;
}

function checkbox(checked) {
  
  let check = document.createElement("input");
  check.setAttribute("type", "checkbox");
  check.className = "btn-check";
  check.checked = checked;

  check.addEventListener("change", function (e) {
    let item = e.target.parentElement;
    if (check.checked) {
      let cuenta = Number(contador.textContent);
      cuenta = cuenta + 1;
      contador.textContent = cuenta;
    } else {
      let cuenta = Number(contador.textContent);

      cuenta = cuenta - 1;
      contador.textContent = cuenta;
    }
    updateTask(item.id, { checked: check.checked });
  });

  return check;
}

function Delete() {
  let ul = document.querySelector("ul");
  const deleteBtn = document.createElement("i");

  deleteBtn.className = "fa-solid fa-trash";

  deleteBtn.addEventListener("click", (e) => {
    const item = e.target.parentElement;
    let check = item.querySelector("input");

    if (check.checked) {
      let cuenta = Number(contador.textContent);
      cuenta = cuenta - 1;
      contador.textContent = cuenta;
    }
    deleteTask(item.id);
    ul.removeChild(item);
   
    const items = document.querySelectorAll("li");
    if (items.length === 0) {
      vacio.style.display = "block";
    } else {
      vacio.style.display = "none";
    }
  });

  return deleteBtn;
}

export { addTask, cargarTask };

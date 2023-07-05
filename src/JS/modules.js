// import { Btn } from "../JS/index.js";
import { deleteTask, post } from "./api.js";

const input = document.querySelector("input");

const ul = document.querySelector("ul");
const vacio = document.querySelector(".vacio");
const contador = document.querySelector("#contador");

async function addTask(e) {
  e.preventDefault();

  const text = input.value;

  if (text !== "") {
    const li = document.createElement("li");
    const parrafo = document.createElement("h4");
    parrafo.textContent = text;

    ul.appendChild(li);
    li.appendChild(checkbox());
    li.appendChild(parrafo);
    li.appendChild(Delete());
    input.value = "";

    let task = {
      task: text,
      checked: false,
    };

    //envío la tarea a guardar
    let postResponse = await post(task);

    //Le asigno el id a la lista para después eliminarla
    li.id = postResponse.id;

    vacio.style.display = "none";
  } else {
    window.alert("Ingresar texto");
  }
}

function checkbox() {
  let check = document.createElement("input");
  check.setAttribute("type", "checkbox");
  check.className = "btn-check";
  check.checked = false;

  check.addEventListener("click", function () {
    if (check.checked) {
      let cuenta = Number(contador.textContent);

      cuenta = cuenta + 1;
      contador.textContent = cuenta;
    } else {
      let cuenta = Number(contador.textContent);

      cuenta = cuenta - 1;
      contador.textContent = cuenta;
    }
  });

  return check;
}

function Delete() {
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
    // if (true) {
    //   console.log("verdadero")
    // }else {
    //   console.log("Falso")
    // }
    const items = document.querySelectorAll("li");
    if (items.length === 0) {
      vacio.style.display = "block";
    } else {
      vacio.style.display = "none";
    }
  });

  return deleteBtn;
}

export { addTask };

const input = document.querySelector("input");
const Btn = document.querySelector(".btn");
const ul = document.querySelector("ul");
const vacio = document.querySelector(".vacio");
const contador = document.querySelector("#contador");

Btn.addEventListener("click", (e) => {
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

    vacio.style.display = "none";
  } else {
    window.alert("Ingresar texto");
  }
});

function checkbox() {
  let check = document.createElement("input");
  check.setAttribute("type", "checkbox");
  check.className = "btn-check";

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

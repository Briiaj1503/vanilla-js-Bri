import { addTask, cargarTask } from "../JS/modules.js";
const Btn = document.querySelector(".btn");

document.addEventListener("DOMContentLoaded", cargarTask);
Btn.addEventListener("click", addTask);
export { Btn };

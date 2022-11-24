/* 
Data attribute: datos que están en la etiqueta html y va 
dentro de paréntesis de corchetes en el querySelector 
 */

/* 
Todo es un objeto en el navegador y los objetos tienen métodos
o funciones 
*/
// Importamos la funcion addTask
import { addTask } from "./components/addTask.js";
import { displayTasks } from "./components/readTasks.js";

// Immediately invoked function expression IIFE
// Funcion auto invocable oculta al usuario

// Creamos una variable con boton del formulario
const btn = document.querySelector("[data-form-btn]");

// listener
btn.addEventListener("click", addTask);
displayTasks();


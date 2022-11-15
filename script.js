/* 
Data attribute: datos que están en la etiqueta html y va 
dentro de paréntesis de corchetes en el querySelector 
 */

/* 
Todo es un objeto en el navegador y los objetos tienen métodos
o funciones 
*/

// Immediately invoked function expression IIFE
// Funcion auto invocable oculta al usuario
( () => {
// Creamos una variable con boton del formulario
const btn = document.querySelector("[data-form-btn]");

// Arrow functions o funciones anónimas
const createTask = (evento) => {
    evento.preventDefault(); // con esto se previene el refresco de la pagina
    // Creamos variable input para traer los datos.
    const input = document.querySelector("[data-form-input]");
    // Guardamos el contenido del input en una variable
    const value = input.value;
    // Creamos un elemento html contenedor de lista
    const list = document.querySelector("[data-list]")
    // Creamos un elemento de la lista
    const task = document.createElement('li');
    // agregamos una clase al elemento li
    task.classList.add('card');
    // Dejamos en blanco el input
    input.value = "";
    // Creamos un Template String ${}
    // Creamos los elementos Html desde Js
    const taskContent = document.createElement("div");
    const titleTask = document.createElement("span");
    // Agregamos una clase al elemento titulo
    titleTask.classList.add("task");
    // Agregamos el contenido al titulo que es el texto ingresado en input
    titleTask.innerText = value;
    // y le agregamos el elemento hijo a elemento de lista
    taskContent.appendChild(checkComplete()); // el check
    taskContent.appendChild(titleTask); // el titulo
    const content = `
    <i class="fas fa-trash-alt trashIcon icon"></i>`;
    // agregamos el html al elemento task
    //task.innerHTML = content;
    task.appendChild(taskContent);
    // agregamos un elemento hijo a la lista
    list.appendChild(task);
}

// listener
btn.addEventListener("click", createTask);

const checkComplete = () => {
    const i = document.createElement("i");
    i.classList.add("far", "fa-check-square", "icon");
    i.addEventListener('click', completeTask);
    return i;
}

const completeTask = (event) => {
    const element = event.target;
    element.classList.toggle('fas');
    element.classList.toggle('completeIcon');
    element.classList.toggle('far');
};
})();
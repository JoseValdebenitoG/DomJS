/* 
Data attribute: datos que están en la etiqueta html y va 
dentro de paréntesis de corchetes en el querySelector 
 */

/* 
Todo es un objeto en el navegador y los objetos tienen métodos
o funciones 
*/

// Creamos una variable con boton del formulario
const btn = document.querySelector("[data-form-btn]");

// Arrow functions o funciones anónimas
const createTask = (evento) => {
    evento.preventDefault(); // con esto se previene el refresco de la pagina
    // creamos variable input para traer los datos.
    const input = document.querySelector("[data-form-input]");
    // guardamos el contenido del input en una variable
    const value = input.value;
    // llamamos al elemento html
    const list = document.querySelector("[data-list]")
    // Creamos un elemento a la lista
    const task = document.createElement('li');
    // agregamos una clase al elemento li
    task.classList.add('card');
    input.value = "";
    // Creamos un Template String
    // y con ${} ponemos una variable js dentro del html
    const content = `<div>
    <i class="far fa-check-square icon"></i>
    <span class="task">${value}</span>
    </div>
    <i class="fas fa-trash-alt trashIcon icon"></i>`;
    // agregamos el html al elemento task
    task.innerHTML = content;
    // agregamos un elemento hijo a la lista
    list.appendChild(task);
    console.log(content);
}

console.log(btn);

// listener
btn.addEventListener("click", createTask);
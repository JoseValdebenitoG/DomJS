// importar funciones
import { uniqueDates } from "../services/date.js";
import checkComplete from "./checkComplete.js";
import deleteIcon from "./deleteIcon.js";
import { displayTasks } from "./readTasks.js";
    
// Arrow functions o funciones anónimas
// addTask agrega la información a la tarea
export const addTask = (evento) => {
    evento.preventDefault(); // con esto se previene el refresco de la pagina

    // Creamos un elemento html contenedor de lista
    const list = document.querySelector("[data-list]");
    // Creamos variable input para traer los datos.
    const input = document.querySelector("[data-form-input]");
    const calendar = document.querySelector('[data-form-date]');
    // Guardamos el contenido de los input en una variable
    const value = input.value;
    const date = calendar.value;
    // Damos formato a la fecha
    const dateFormat = moment(date).format("DD/MM/YYYY");

    if (value === "" || date === "") {
        return;
    }

    // Dejamos en blanco los input
    input.value = "";
    calendar.value = "";

    // Estado de la tarea
    const complete = false;

    // Agregamos un elemento para el local Storage
    const taskObj = {
        value,
        dateFormat,
        complete,
        id: uuid.v4()
    };

    // iniciamos la lista vacía al inicio
    list.innerHTML = '';

    // creamos un array para guardar las task
    const taskList = JSON.parse(localStorage.getItem('tasks')) || [];

    //agregamos los objetos al array de task
    taskList.push(taskObj);

    // y almacenamos taskList en el localStorage
    // sessionStorage.setItem("tasks", JSON.stringify(taskObj));
    localStorage.setItem("tasks", JSON.stringify(taskList));

    displayTasks();
};

// createTask inserta los elementos html desde JS
export const createTask = ({value,dateFormat, complete, id}) => {
    // Creamos un elemento de la lista
    const task = document.createElement('li');
    // agregamos una clase al elemento li
    task.classList.add('card');

    // creamos el div que contendrá las card
    const taskContent = document.createElement("div");

    // Tarea completada
    // Llamamos la funcion checkComplete
    const check = checkComplete(id);
    // Verificamos y si el check está activado
    if (complete){
        check.classList.toggle('fas');
        check.classList.toggle('completeIcon');
        check.classList.toggle('far');
    }
    // Contenido de la tarjeta
    // agregamos un span para el titulo
    const titleTask = document.createElement("span");
    // Agregamos una clase al elemento titulo
    titleTask.classList.add("task");
    // Agregamos el contenido al titulo que es el texto ingresado en input
    titleTask.innerText = value;
    // y le agregamos los elementos hijo al elemento de lista
    taskContent.appendChild(check); // el check
    taskContent.appendChild(titleTask); // el titulo

    task.appendChild(taskContent); // contenido de la tarjeta

    // agregamos un elemento hijo a la lista
    task.appendChild(deleteIcon(id)); // icono basurero para borrar
    return task;
};
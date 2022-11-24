import { createTask } from "./addTask.js";
import { uniqueDates, orderDates } from "../services/date.js";
import  dateElement  from "./dateElement.js";

export const displayTasks = () => {
    // llamamos al html contenedor de la lista
    const list = document.querySelector('[data-list]');
    // traemos lo guardado en localStorage
    const taskList = JSON.parse(localStorage.getItem("tasks")) || [];
    const dates = uniqueDates(taskList);
    orderDates(dates); // ordenamos fechas
    // Filtramos por fechas
    dates.forEach( date => {
        const dateMoment = moment(date, "DD/MM/YYYY");
        // agregamos elemento según fecha
        list.appendChild(dateElement(date));
        // LLamamos a crear tarea y agregamos las tareas del localStorage.
        taskList.forEach((task) => {
            const taskDate = moment(task.dateFormat, "DD/MM/YYYY");
            const diff = dateMoment.diff(taskDate); // diferencia de fechas
            // verificamos que las fechas sean iguales
            if (diff === 0){
                list.appendChild(createTask(task));
            }
        });
    });
}
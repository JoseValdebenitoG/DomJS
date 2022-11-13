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
    console.log(input.value);
}

console.log(btn);

// listener
btn.addEventListener("click", createTask);
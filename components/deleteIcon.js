
    const deleteIcon = () => {
        const content = `
        <i class="fas fa-trash-alt trashIcon icon"></i>`;
        const i = document.createElement("i");
        i.classList.add("fas", "fa-trash-alt", "trashIcon", "icon");
        i.addEventListener("click", deleteTask);
        return i;
    }

    const deleteTask = (event) => {
        // selecciona elemento padre
        const parent = event.target.parentElement; 
        // eliminamos elemento padre con método remove()
        parent.remove();
    }

    export default deleteIcon;
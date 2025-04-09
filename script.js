const listInput = document.getElementById("list-input");
const button = document.getElementById("submit");
const listOutput = document.getElementById("todo-list");
const elementList = document.getElementById("elementList");

/* Creation du squelette de tache */

class Task {
    constructor(title) {
        this.title = title;
    }
}

/* INPUT
   Evenement au clic sur le bouton */

button.addEventListener("click", (event) => {
    event.preventDefault();

    const inputValue = listInput.value.trim();

    // Vérifier si l'input est vide
    if (inputValue === "") {
        alert("Veuillez entrer une tâche valide !");
        return;
    }

    // Creation de l'instance de taches  
    const newTask = new Task(inputValue);

    /* OUTPUT 
       Creation de l'element de liste pour l'instance de taches */    

    const taskElement = document.createElement("li");
    taskElement.textContent = newTask.title;
    taskElement.classList.add('delete');

    // Creation du bouton pour la suppression

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";

    // Au clic sur le bouton delete   

    deleteBtn.addEventListener("click", () => {
        listOutput.removeChild(taskElement);
    });

    taskElement.appendChild(deleteBtn);
    listOutput.appendChild(taskElement);

    listInput.value = "";
});


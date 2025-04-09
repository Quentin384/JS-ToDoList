/* PREMIERE TENTATIVE

/* Creation du squelette de la liste pricipale 

class mainList {
    constructor (action1, action2, action3) {
        this.action1 = action1;
        this.action2 = action2;
        this.action3 = action3
    }
}

/* Premiere liste qui reprend le squelette liste principale 

groceryList = new mainList("TakeYourCar", "GoToTheMall", "TakeACart");
console.log(groceryList);

/* Creation du squelette de la liste enfant reprennant le squelette de la premiere liste 

class secondList extends mainList {
    constructor(action1, action2, action3, action4, action5) {
        super(action1, action2, action3);
        this.action4 = action4;
        this.action5 = action5;
    }
}

/* Liste selon le squelette de la liste enfant 

foodList = new secondList("TakeYourCar", "GoToTheMall","TakeACart", "GoToTheFoodAlley", "ChooseAnAliment");
console.log(foodList);

*/

const listInput = document.getElementById("list-input");
const button = document.getElementById("submit");
const listOutput = document.getElementById("todo-list");
const elementList = document.getElementById("elementList")

/* Creation du squelette de tache */

class Task {
    constructor(title) {
        this.title = title
    }
}

/* INPUT
   Evenement au clic sur le bouton */

button.addEventListener("click", (event) => {
    event.preventDefault();

    const inputValue = listInput.value;

 // Creation de l'instance de taches  

    const newTask = new Task(inputValue);
    console.log(newTask);

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


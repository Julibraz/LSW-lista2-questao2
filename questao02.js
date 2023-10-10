const inputTarefas = document.getElementById("inputTarefas");
const lista = document.getElementById("lista");

//Ouvinte de evento para a tecla enter
inputTarefas.addEventListener("keyup", function(event){
    if(event.key == "Enter" && inputTarefas.value.trim() !== ""){
        addTarefa(inputTarefas.value.trim());
        inputTarefas.value = "";
    }
});

function addTarefa(tarefa){
    const divTarefa = document.createElement("div");
    divTarefa.classList.add("tarefa");
    
    //texto
    divTarefa.innerHTML = tarefa;

    //remoção de tarefa
    const remover = document.createElement("button");
    remover.innerHTML = "X";
    remover.addEventListener("click", function(){
        lista.removeChild(divTarefa);
    });

    divTarefa.appendChild(remover);
    lista.appendChild(divTarefa);
}
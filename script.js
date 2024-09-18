const item = document.getElementById("input-item");
const botaoSalvarItem = document.getElementById("button-item");
const listaDeCompras = document.getElementById("lista-de-compras");
const listaComprados = document.getElementById("lista-comprados");
let contador = 0;

//Adiciona um reconhecimento de evento de clique ao botão "salvar item"
botaoSalvarItem.addEventListener("click", adicionarItem);

//Cria a função do botão "salvar item"
function adicionarItem(evento) {
    evento.preventDefault()

    const itemDaLista = document.createElement("li");
    const containerItemLista = document.createElement("div");
    containerItemLista.classList.add("lista-item-container");

    const containerNomeDoItem = document.createElement("div");

    const containerCheckbox = document.createElement("div");
    containerCheckbox.classList.add("container-checkbox");

    const checkboxInput = document.createElement("input");
    checkboxInput.type = "checkbox";
    checkboxInput.classList.add("input-checkbox");
    checkboxInput.id = "checkbox-" + contador++;

    const checkboxLabel = document.createElement("label");
    checkboxLabel.setAttribute("for", checkboxInput.id);

    //Marca e desmarca item como comprado    
    checkboxLabel.addEventListener("click", function (evento) {
        const checkboxInput = evento.currentTarget.querySelector(".input-checkbox");
        const checkboxCustomizado = evento.currentTarget.querySelector(".checkbox-customizado");
        const itemTitulo = evento.currentTarget.closest("li").querySelector("#item-titulo");

        if (checkboxInput.checked) {
            checkboxCustomizado.classList.add("checked");
            itemTitulo.style.textDecoration = "line-through";
            listaComprados.appendChild(itemDaLista);
        } else {
            checkboxCustomizado.classList.remove("checked");
            itemTitulo.style.textDecoration = "none";
            listaDeCompras.appendChild(itemDaLista);
        }
    })

    //Cria o elemnto "div" do Checkbox e adiciona sua classe
    const checkboxCustomizado = document.createElement("div");
    checkboxCustomizado.classList.add("checkbox-customizado");

    //Adiciona o elemento "input" e o elemento "div" do checkbox como filhos do elemento "label"
    checkboxLabel.appendChild(checkboxInput);
    checkboxLabel.appendChild(checkboxCustomizado);

    //Adiciona o elemento "label" como filho do elemento "div" que envolve os elementos do checkbox, e esse elemento "div" como filho do elemento "div" que envolve o nome do item
    containerCheckbox.appendChild(checkboxLabel);
    containerNomeDoItem.appendChild(containerCheckbox);

    //Cria o elemento "p" nome do item
    const nomeDoItem = document.createElement("p");
    nomeDoItem.id = "item-titulo";
    nomeDoItem.innerText = item.value;
    containerNomeDoItem.appendChild(nomeDoItem);

    //Cria o elemento "div" que envolve os botões, e o os elementos "button", de editar e remover o item, e adiciona a classe aos botões
    const containerBotoes = document.createElement("div");
    const botaoRemover = document.createElement("button");
    botaoRemover.classList.add("item-lista-button");
    const botaoEditar = document.createElement("button");
    botaoEditar.classList.add("item-lista-button");
    
    //Cria o ícone de deletar o item
    const imagemRemover = document.createElement("img");
    imagemRemover.src ="img/delete.svg";
    imagemRemover.alt = "Remover";

    //Cria o ícone de editar o nome do item
    const imagemEditar = document.createElement("img");
    imagemEditar.src = "img/edit.svg";
    imagemEditar.alt = "Editar";

    //Adiciona a o elemento "img" dos botões, como filho dos elementos "button", e o elemento "button", como filho do elemento "div" que envolve os botões
    botaoRemover.appendChild(imagemRemover);
    containerBotoes.appendChild(botaoRemover);
    botaoEditar.appendChild(imagemEditar);
    containerBotoes.appendChild(botaoEditar);

    containerItemLista.appendChild(containerNomeDoItem);
    containerItemLista.appendChild(containerBotoes);
    itemDaLista.appendChild(containerItemLista);
    listaDeCompras.appendChild(itemDaLista);
}
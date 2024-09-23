import { adicionarItem } from "./js/adicionarItem.js";

const botaoSalvarItem = document.getElementById("button-item");
//Adiciona um reconhecimento de evento de clique ao botão "salvar item"
botaoSalvarItem.addEventListener("click", adicionarItem);

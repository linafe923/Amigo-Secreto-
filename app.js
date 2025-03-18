const listaAmigos = []; // Array para armazenar os nomes

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();

    if (nome === "") {
        alert("Por favor, digite um nome válido!");
        return;
    }

    if (listaAmigos.includes(nome)) {
        alert("Esse nome já foi adicionado!");
        return;
    }

    listaAmigos.push(nome);
    atualizarLista();
    input.value = "";
    input.focus();
}

function atualizarLista() {
    const listaElement = document.getElementById("listaAmigos");
    listaElement.innerHTML = "";

    listaAmigos.forEach((nome) => {
        const item = document.createElement("li");
        item.textContent = nome;
        listaElement.appendChild(item);
    });
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("A lista está vazia! Adicione nomes antes de sortear.");
        return;
    }

    const sorteado = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
    const resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = `<p>🎉 O amigo secreto sorteado é: <strong>${sorteado}</strong>! 🎁</p>`;
}
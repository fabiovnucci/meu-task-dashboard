// Seleção dos elementos do DOM
const inputTarefa = document.getElementById('taskInput');
const btnAdicionar = document.getElementById('addBtn');
const listaTarefas = document.getElementById('taskList');

/**
 * Função responsável por criar e adicionar a tarefa à lista.
 * Inclui a criação dinâmica do botão de remover.
 */
function adicionarTarefa() {
    const textoTarefa = inputTarefa.value.trim();

    // Validação básica: não faz nada se o campo estiver vazio
    if (textoTarefa === "") return; 

    // 1. Cria o elemento <li>
    const novaTarefa = document.createElement('li');
    novaTarefa.textContent = textoTarefa;

    // 2. Cria o botão de "Remover"
    const btnRemover = document.createElement('button');
    btnRemover.textContent = "Remover";
    
    // 3. Lógica do botão: ao clicar, o elemento <li> pai é removido
    btnRemover.onclick = function() {
        novaTarefa.remove();
    };

    // 4. Integra o botão na tarefa e a tarefa na lista
    novaTarefa.appendChild(btnRemover);
    listaTarefas.appendChild(novaTarefa);
    
    // 5. Limpa o input e retorna o foco para ele
    inputTarefa.value = "";
    inputTarefa.focus();
}

// Escuta o clique no botão "Adicionar"
btnAdicionar.addEventListener('click', adicionarTarefa);

// Escuta a tecla "Enter" para facilitar o uso
inputTarefa.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') adicionarTarefa();
});
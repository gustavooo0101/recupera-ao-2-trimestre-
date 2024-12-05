function startStory() {
    document.getElementById('introduction').classList.add('hidden');
    document.getElementById('chapter').classList.remove('hidden');
    showChapter(1);
}

function showChapter(chapter) {
    const chapterTitle = document.getElementById('chapter-title');
    const chapterText = document.getElementById('chapter-text');
    const choicesDiv = document.getElementById('choices');

    choicesDiv.innerHTML = ''; // Limpa escolhas anteriores

    if (chapter === 1) {
        chapterTitle.innerText = 'Capítulo 1: O Encontro';
        chapterText.innerText = 'Você encontrou um robô que pode falar. Ele te oferece duas opções qual vocẽ escolhe:';
        choicesDiv.innerHTML = `para ele falar o futuro da humanidade se ele conseguir 
            <button onclick="showChapter(2)">Falar com o robô</button>
            <button onclick="showChapter(3)">Ignorar o robô</button>
        `;
    } else if (chapter === 2) {
        chapterTitle.innerText = 'Capítulo 2: A Conversa';
        chapterText.innerText = 'O robô compartilha informações fascinantes sobre IA. Você decide:';
        choicesDiv.innerHTML = `compartilhar com mais pessoas 
            <button onclick="showChapter(4)">Perguntar sobre o futuro da IA</button>
            <button onclick="showChapter(5)">Despedir-se do robô</button>
        `;
    } else if (chapter === 3) {
        chapterTitle.innerText = 'Capítulo 3: A Solidão';
        chapterText.innerText = 'Você se afastou do robô e se sentiu sozinho. O que você fará agora?';
        choicesDiv.innerHTML = `voltarei a convercar com ele e descobrir mais coisas sobre o futuro
            <button onclick="showChapter(1)">Voltar e falar com o robô</button>
        `;
    } else if (chapter === 4) {
        chapterTitle.innerText = 'Capítulo 4: O Futuro';
        chapterText.innerText = 'O robô fala sobre um futuro onde humanos e IA coexistem pacificamente. Você sente esperança!';
        choicesDiv.innerHTML = `me cinto feliz
            <button onclick="showChapter(1)">Recomeçar a Aventura</button>
        `;
    } else if (chapter === 5) {
        chapterTitle.innerText = 'Capítulo 5: Um Adeus';
        chapterText.innerText = 'Você se despediu do robô e seguiu seu caminho, refletindo sobre a conversa.';
        choicesDiv.innerHTML = `foi uma otima converca aprendi muitas coisas que irão ajudar num futuro distante para mim e para os outros humanos 
            <button onclick="showChapter(1)">Recomeçar a Aventura</button>
        `;
    }
}
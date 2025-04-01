<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Página Inicial</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>

    <!-- Cabeçalho -->
    <header>
        <nav class="navegacao">
            <!-- Adicione links de navegação ou ícones aqui -->
        </nav>
    </header>

    <!-- Conteúdo Principal -->
    <main class="conteudo-principal">

        <!-- Seção de Mensagens -->
        <section class="secao mensagens">
            <h2 class="titulo-secao">Mensagens</h2>
            <div class="card-mensagem">
                <h3>Armário Reservado</h3>
                <p>Você possui um armário reservado com entrega para hoje...</p>
            </div>
            <div class="card-mensagem">
                <h3>Pendência Financeira</h3>
                <p>Você possui uma pendência no financeiro...</p>
            </div>
        </section>

        <!-- Seção de Aulas -->
        <section class="secao aulas">
            <h2 class="titulo-secao">Aulas</h2>
            <div class="item-aula">
                <h3>Disciplina 1</h3>
                <p>Sala 203 • 14:00 - 16:00</p>
            </div>
            <div class="item-aula">
                <h3>Disciplina 2</h3>
                <p>Sala 305 • 16:30 - 18:30</p>
            </div>
            <div class="item-aula">
                <h3>Disciplina 3</h3>
                <p>Sala 102 • 19:00 - 21:00</p>
            </div>
        </section>

        <!-- Seção de Carrossel -->
        <section class="secao">
            <div class="carousel-container">
                <div class="carousel">
                    <!-- Os cards deverão ser inseridos dinamicamente via JS -->
                </div>
                <button id="prevBtn">❮</button>
                <button id="nextBtn">❯</button>
            </div>
        </section>
    </main>

</body>
</html>

// Cada missão tem uma saída observável. O aluno pode chegar a ela de várias formas.
window.MODULES = [
  { id: 1, emoji: "🚀", title: "Primeiro contato", subject: "Python" },
  { id: 2, emoji: "🧮", title: "Matemática em ação", subject: "Matemática" },
  { id: 3, emoji: "🌍", title: "Volta ao mundo", subject: "Geografia" },
  { id: 4, emoji: "⏳", title: "Máquina do tempo", subject: "História" },
  { id: 5, emoji: "🪐", title: "Laboratório de física", subject: "Física" }
];

window.LESSONS = [
  {
    id: 1, module: 1, title: "Olá, explorador!", goal: "Faça o computador dizer Olá, mundo!", concept: "print mostra uma mensagem na tela. O texto fica entre aspas.",
    starter: 'print("Sua mensagem aqui")', target: "Olá, mundo!", hint: 'Troque só o que está entre aspas por Olá, mundo!',
    celebrate: "Você deu sua primeira instrução ao computador! Agora invente outra frase e rode de novo."
  },
  {
    id: 2, module: 1, title: "Minha apresentação", goal: "Mostre a frase: Sou a Capitã Estrela", concept: "Você escolhe o texto que aparece. Use um nome inventado para brincar em segurança.",
    starter: 'print("Sou ...")', target: "Sou a Capitã Estrela", hint: 'Escreva Sou a Capitã Estrela dentro das aspas.',
    celebrate: "Uma personagem nasceu! Experimente criar outra apresentação depois."
  },
  {
    id: 3, module: 1, title: "Soma secreta", goal: "Mostre o resultado de 4 + 3.", concept: "Python também é uma calculadora. Números não precisam de aspas.",
    starter: "print(4 + 1)", target: "7", hint: "Quanto precisamos somar a 4 para chegar a 7? Mude o segundo número.",
    celebrate: "Sete pontos! Antes de rodar outra conta, tente adivinhar o resultado."
  },
  {
    id: 4, module: 1, title: "Mochila de itens", goal: "Guarde 5 na variável itens e mostre 5.", concept: "Uma variável é uma caixa com nome. Podemos guardar um número nela.",
    starter: "itens = 2\nprint(itens)", target: "5", required: "itens", hint: "Mude o número guardado na caixa itens para 5.",
    celebrate: "Você usou uma variável! Conte para alguém o que ficou dentro de itens."
  },
  {
    id: 5, module: 2, title: "Pontos da equipe", goal: "A equipe ganhou 6 pontos e depois 4. Mostre 10.", concept: "Podemos somar valores guardados em variáveis.",
    starter: "primeira_rodada = 6\nsegunda_rodada = 2\nprint(primeira_rodada + segunda_rodada)", target: "10", required: "primeira_rodada", hint: "A segunda rodada precisa valer 4 pontos.",
    celebrate: "Dez pontos! Que resultado sairia se a segunda rodada valesse 5?"
  },
  {
    id: 6, module: 2, title: "Par ou ímpar", goal: "Faça aparecer: É par", concept: "O símbolo % encontra o resto da divisão. Se o resto ao dividir por 2 é zero, o número é par.",
    starter: 'numero = 8\nif numero % 2 == 1:\n    print("É par")\nelse:\n    print("É ímpar")', target: "É par", required: "if", hint: "Para um número par, o resto da divisão por 2 é 0, não 1.",
    celebrate: "Você tomou uma decisão com if! Experimente trocar 8 por 9."
  },
  {
    id: 7, module: 2, title: "Contagem regressiva", goal: "Mostre 3, 2 e 1 em linhas separadas.", concept: "Um laço for repete uma instrução. range(3, 0, -1) conta de 3 até 1.",
    starter: "for numero in range(3, 1, -1):\n    print(numero)", target: "3\n2\n1", required: "for", hint: "O segundo número de range é o ponto de parada, que não aparece. Use 0.",
    celebrate: "Lançamento! Você fez o computador repetir uma ação."
  },
  {
    id: 8, module: 2, title: "Minha função", goal: "Faça a função mostrar: Missão cumprida!", concept: "Uma função é um conjunto de instruções que podemos chamar pelo nome.",
    starter: 'def comemorar():\n    print("Quase lá!")\n\ncomemorar()', target: "Missão cumprida!", required: "def", hint: "Mude a frase dentro da função. A última linha chama a função.",
    celebrate: "Função criada! Agora você pode chamá-la mais de uma vez."
  },
  {
    id: 9, module: 3, title: "Capitais", goal: "Mostre: Brasília é a capital do Brasil", concept: "Uma lista guarda vários itens em ordem. O primeiro item tem índice 0.",
    starter: 'capitais = ["Brasília", "Lisboa", "Tóquio"]\nprint(capitais[1] + " é a capital do Brasil")', target: "Brasília é a capital do Brasil", required: "capitais[", hint: "O primeiro item da lista é capitais[0].",
    celebrate: "Boa viagem! Confira no mapa onde fica Brasília."
  },
  {
    id: 10, module: 3, title: "Próxima parada", goal: "Mostre: Vamos para Lisboa", concept: "Podemos usar outro item da mesma lista sem reescrever tudo.",
    starter: 'cidades = ["Brasília", "Lisboa", "Tóquio"]\nprint("Vamos para " + cidades[0])', target: "Vamos para Lisboa", required: "cidades[", hint: "Lisboa é o segundo item. Seu índice é 1.",
    celebrate: "Próxima parada: Portugal! Que país você gostaria de pesquisar?"
  },
  {
    id: 11, module: 3, title: "Quantos lugares?", goal: "Mostre quantas cidades há na lista: 4.", concept: "len conta quantos itens existem em uma lista.",
    starter: 'cidades = ["Recife", "Manaus", "Curitiba", "Belém"]\nprint(len(cidades) - 1)', target: "4", required: "len", hint: "len já conta tudo. Não subtraia 1.",
    celebrate: "Quatro lugares! Tente encontrar as cidades em um mapa."
  },
  {
    id: 12, module: 3, title: "Bússola", goal: "Mostre: Norte", concept: "Direções ajudam a descrever a posição. Uma lista pode guardar os pontos cardeais.",
    starter: 'direcoes = ["Norte", "Sul", "Leste", "Oeste"]\nprint(direcoes[2])', target: "Norte", required: "direcoes[", hint: "Norte é o primeiro item, de índice 0.",
    celebrate: "Bússola ajustada! Olhe um mapa e encontre o norte."
  },
  {
    id: 13, module: 4, title: "Antes e depois", goal: "Mostre: 1822 veio antes de 1889", concept: "Anos podem ser comparados com <. No Brasil, a Independência foi declarada em 1822 e a República foi proclamada em 1889.",
    starter: 'if 1822 > 1889:\n    print("1822 veio antes de 1889")\nelse:\n    print("Vamos conferir os anos")', target: "1822 veio antes de 1889", required: "if", hint: "Qual símbolo significa menor que? Troque > por <.",
    celebrate: "Você colocou os acontecimentos em ordem. Agora procure esses eventos numa linha do tempo."
  },
  {
    id: 14, module: 4, title: "Linha do tempo", goal: "Mostre os anos 1500, 1822 e 1889, um por linha.", concept: "sorted coloca números em ordem crescente. O ano 1500 é um marco da chegada portuguesa ao território que hoje chamamos Brasil; povos indígenas já viviam aqui.",
    starter: "anos = [1889, 1500, 1822]\nfor ano in anos:\n    print(ano)", target: "1500\n1822\n1889", required: "sorted", hint: "No laço, percorra sorted(anos) em vez de anos.",
    celebrate: "Linha do tempo pronta! Conversar sobre o que havia antes de 1500 também faz parte da história."
  },
  {
    id: 15, module: 4, title: "Séculos", goal: "Mostre: 1822 pertence ao século 19", concept: "Para anos depois de 1, século = (ano - 1) // 100 + 1. O símbolo // faz divisão inteira.",
    starter: 'ano = 1822\nseculo = ano // 100\nprint(str(ano) + " pertence ao século " + str(seculo))', target: "1822 pertence ao século 19", required: "//", hint: "Use (ano - 1) // 100 + 1 para calcular o século.",
    celebrate: "Você calculou um século! Teste com o ano 2000 e veja o que acontece."
  },
  {
    id: 16, module: 4, title: "Bilhete do passado", goal: "Mostre: Fato: a República foi proclamada em 1889", concept: "Em história, separamos fatos de histórias inventadas. Podemos guardar um fato em uma variável.",
    starter: 'fato = "a República foi proclamada em 1889"\nprint("Era uma vez: " + fato)', target: "Fato: a República foi proclamada em 1889", required: "fato", hint: "Troque Era uma vez: por Fato: no print.",
    celebrate: "Boa investigação! Sempre confira fatos históricos com um adulto e fontes confiáveis."
  },
  {
    id: 17, module: 5, title: "Distância", goal: "Mostre: 12 metros", concept: "Se uma pessoa percorre 3 metros por segundo durante 4 segundos, a distância é velocidade × tempo.",
    starter: 'velocidade = 3\ntempo = 4\ndistancia = velocidade + tempo\nprint(str(distancia) + " metros")', target: "12 metros", required: "distancia", hint: "Para calcular a distância, multiplique velocidade por tempo com *.",
    celebrate: "Doze metros! A unidade metros conta o quanto foi percorrido."
  },
  {
    id: 18, module: 5, title: "Velocidade", goal: "Mostre: 5 metros por segundo", concept: "Velocidade média = distância ÷ tempo. Aqui, 20 metros em 4 segundos.",
    starter: 'distancia = 20\ntempo = 4\nvelocidade = distancia + tempo\nprint(str(velocidade) + " metros por segundo")', target: "5 metros por segundo", required: "velocidade", hint: "Divida distancia por tempo com // para obter um número inteiro neste exemplo.",
    celebrate: "Cinco metros por segundo! Compare com uma caminhada real, com ajuda de um adulto."
  },
  {
    id: 19, module: 5, title: "Queda livre", goal: "Mostre: 20 metros", concept: "Em um modelo simples, a distância de queda após t segundos é g × t² ÷ 2. Vamos usar g = 10 m/s² e t = 2 s. Na vida real, o ar também influencia.",
    starter: 'g = 10\nt = 2\nqueda = g * t / 2\nprint(str(int(queda)) + " metros")', target: "20 metros", required: "queda", hint: "Falta multiplicar por t uma segunda vez: g * t * t / 2.",
    celebrate: "Modelo calculado! Não faça experiências de queda com pessoas ou objetos perigosos."
  },
  {
    id: 20, module: 5, title: "Missão foguete", goal: "Mostre: Foguete percorreu 30 metros", concept: "Junte variável, multiplicação e texto para contar uma pequena história de física.",
    starter: 'velocidade = 4\ntempo = 5\ndistancia = velocidade * tempo\nprint("Foguete percorreu " + str(distancia) + " metros")', target: "Foguete percorreu 30 metros", required: "velocidade", hint: "Se o tempo é 5 segundos, qual velocidade produz 30 metros? Troque o 4.",
    celebrate: "Você terminou a trilha de Python! Agora pode construir seu site interativo."
  }
];

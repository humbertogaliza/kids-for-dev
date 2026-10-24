// Cada missão tem uma saída observável. O aluno pode chegar a ela de várias formas.
window.MODULES = [
  { id: 1, emoji: "🚀", title: "Primeiro contato", subject: "Python" },
  { id: 6, emoji: "🧩", title: "Tipos de dados", subject: "Python" },
  { id: 2, emoji: "🧮", title: "Matemática em ação", subject: "Matemática" },
  { id: 7, emoji: "🎒", title: "Coleções de dados", subject: "Python" },
  { id: 8, emoji: "🔎", title: "Lógica de programação", subject: "Lógica" },
  { id: 9, emoji: "🗺️", title: "Construindo algoritmos", subject: "Algoritmos" },
  { id: 3, emoji: "🌍", title: "Volta ao mundo", subject: "Geografia" },
  { id: 4, emoji: "⏳", title: "Máquina do tempo", subject: "História" },
  { id: 5, emoji: "🪐", title: "Laboratório de física", subject: "Física" },
  { id: 10, emoji: "🗣️", title: "Laboratório de inglês", subject: "Inglês" },
  { id: 11, emoji: "💬", title: "Laboratório de espanhol", subject: "Espanhol" }
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
    celebrate: "Foguete lançado! Você juntou matemática e física em um programa."
  }
];

window.LESSONS.push(
  { id: 21, module: 6, title: "Texto ou número?", goal: "Faça aparecer str, o tipo de um texto.", concept: "Uma string (str) é texto entre aspas. type descobre o tipo de um valor.", starter: "mensagem = 42\nprint(type(mensagem).__name__)", target: "str", required: "type(", hint: "Troque 42 por um texto entre aspas, como \"olá\"." },
  { id: 22, module: 6, title: "Número inteiro", goal: "Faça aparecer int, o tipo de um número inteiro.", concept: "Um inteiro (int) não tem parte decimal. Entre aspas, 12 vira texto.", starter: 'idade = "12"\nprint(type(idade).__name__)', target: "int", required: "type(", hint: "Retire as aspas de 12 para transformá-lo em inteiro." },
  { id: 23, module: 6, title: "Número decimal", goal: "Faça aparecer float, o tipo de um número decimal.", concept: "Em Python, números decimais usam ponto: 2.5. O tipo se chama float.", starter: "medida = 2\nprint(type(medida).__name__)", target: "float", required: "type(", hint: "Troque 2 por 2.5. Em Python, use ponto em vez de vírgula." },
  { id: 24, module: 6, title: "Verdadeiro ou falso", goal: "Faça aparecer bool, o tipo de True ou False.", concept: "Um booleano (bool) só pode ser True ou False. As palavras não têm aspas.", starter: 'porta_aberta = "True"\nprint(type(porta_aberta).__name__)', target: "bool", required: "type(", hint: "Retire as aspas de True. Assim ele vira um valor lógico." },
  { id: 25, module: 7, title: "Lista de cores", goal: "Mostre verde, o segundo item da lista.", concept: "Uma lista mantém os itens em ordem. O primeiro índice é 0; o segundo é 1.", starter: 'cores = ["azul", "verde", "amarelo"]\nprint(cores[0])', target: "verde", required: "cores[", hint: "Use cores[1] para pegar o segundo item." },
  { id: 26, module: 7, title: "Dicionário do herói", goal: "Mostre 8, a idade do herói.", concept: "Um dicionário liga uma chave a um valor. Podemos consultar a chave idade.", starter: 'heroi = {"nome": "Luna", "idade": 8}\nprint(heroi["nome"])', target: "8", required: "heroi[", hint: 'Consulte heroi["idade"] em vez de heroi["nome"].' },
  { id: 27, module: 7, title: "Coordenadas", goal: "Mostre 5, a segunda coordenada.", concept: "Uma tupla parece uma lista, mas seus itens não mudam depois de criada.", starter: "posicao = (3, 5)\nprint(posicao[0])", target: "5", required: "posicao[", hint: "A segunda posição tem índice 1." },
  { id: 28, module: 7, title: "Sem repetidos", goal: "Mostre 2, a quantidade de emblemas diferentes.", concept: "Um conjunto (set) guarda cada valor uma vez só. len conta os itens únicos.", starter: 'emblemas = {"estrela", "estrela", "lua"}\nprint(len(emblemas) + 1)', target: "2", required: "len(", hint: "len já mostra a quantidade correta. Retire o + 1." },
  { id: 29, module: 8, title: "Comparar energia", goal: "Faça aparecer True quando a energia for maior que 5.", concept: "Uma comparação responde True ou False. O sinal > significa maior que.", starter: "energia = 7\nprint(energia > 10)", target: "True", required: ">", hint: "Compare energia com 5, não com 10." },
  { id: 30, module: 8, title: "As duas pistas", goal: "Faça aparecer True quando houver sol e calor.", concept: "and só é True quando as duas condições são verdadeiras.", starter: "sol = True\ntemperatura = 10\nprint(sol and temperatura > 15)", target: "True", required: "and", hint: "Aumente a temperatura para 20." },
  { id: 31, module: 8, title: "Uma pista basta", goal: "Faça aparecer True quando houver chave ou código.", concept: "or é True quando pelo menos uma condição é verdadeira.", starter: "tem_chave = False\ntem_codigo = True\nprint(tem_chave and tem_codigo)", target: "True", required: "or", hint: "Troque and por or: o código já abre a porta." },
  { id: 32, module: 8, title: "Inverter a ideia", goal: "Faça aparecer True para porta não aberta.", concept: "not inverte um valor lógico: not False vira True.", starter: "porta_aberta = False\nprint(porta_aberta)", target: "True", required: "not", hint: "Coloque not antes de porta_aberta no print." },
  { id: 33, module: 9, title: "Plano do robô", goal: "Mostre os passos 1, 2 e 3, nessa ordem.", concept: "Um algoritmo é uma sequência de passos. A ordem muda o resultado.", starter: "passos = [3, 1, 2]\nfor passo in passos:\n    print(passo)", target: "1\n2\n3", required: "for", hint: "Coloque os números da lista na ordem 1, 2, 3." },
  { id: 34, module: 9, title: "Contador de pares", goal: "Conte os pares de [2, 4, 5, 8] e mostre 3.", concept: "Um algoritmo pode repetir, testar e contar. Cada número par aumenta o contador.", starter: "contagem = 0\nfor numero in [2, 4, 5, 8]:\n    if numero % 2 == 1:\n        contagem += 1\nprint(contagem)", target: "3", required: "for", hint: "Pares deixam resto 0 na divisão por 2. Troque == 1 por == 0." },
  { id: 35, module: 9, title: "Encontrar um nome", goal: "Mostre True se Sol está na lista.", concept: "O operador in procura um item em uma coleção. É uma busca simples.", starter: 'nomes = ["Lia", "Noa", "Sol"]\nprint("Lua" in nomes)', target: "True", required: " in ", hint: 'Procure "Sol" em vez de "Lua".' },
  { id: 36, module: 9, title: "Menor distância", goal: "Mostre 3, a menor distância da lista.", concept: "sorted ordena valores; o primeiro item da lista ordenada é o menor.", starter: "distancias = [9, 3, 5]\nprint(sorted(distancias)[-1])", target: "3", required: "sorted(", hint: "Depois de ordenar, pegue o primeiro item com índice 0." },
  { id: 37, module: 10, title: "Hello, friend!", goal: "Faça o computador dizer Hello!", concept: "Hello é uma saudação em inglês. Vamos escrever e ouvir a palavra.", starter: 'print("Hi")', target: "Hello!", hint: 'Troque Hi por Hello! dentro das aspas.', say: { text: "Hello!", lang: "en-US" } },
  { id: 38, module: 10, title: "House", goal: "Mostre house, a palavra em inglês para casa.", concept: "Um dicionário pode ligar uma palavra a sua tradução.", starter: 'words = {"casa": "house", "sol": "sun"}\nprint(words["sol"])', target: "house", required: "words[", hint: 'Consulte a chave "casa" no dicionário.', say: { text: "house", lang: "en-US" } },
  { id: 39, module: 10, title: "Cats", goal: "Mostre cats, o plural de cat.", concept: "Algumas palavras em inglês ganham s no plural. Em Python, + junta textos.", starter: 'animal = "cat"\nprint(animal)', target: "cats", required: "animal", hint: 'Junte animal e "s" com +.', say: { text: "cats", lang: "en-US" } },
  { id: 40, module: 11, title: "¡Hola!", goal: "Faça o computador dizer ¡Hola!", concept: "Hola é uma saudação em espanhol. O sinal ¡ também faz parte da frase.", starter: 'print("Hola")', target: "¡Hola!", hint: 'Adicione ¡ no começo e ! no fim da palavra.', say: { text: "¡Hola!", lang: "es-ES" } },
  { id: 41, module: 11, title: "Rojo", goal: "Mostre rojo, a cor vermelha em espanhol.", concept: "Palavras de outro idioma também podem ficar numa lista.", starter: 'colores = ["rojo", "azul", "verde"]\nprint(colores[1])', target: "rojo", required: "colores[", hint: "Rojo é o primeiro item, de índice 0.", say: { text: "rojo", lang: "es-ES" } },
  { id: 42, module: 11, title: "Hola, mundo", goal: "Mostre Hola, mundo juntando dois textos.", concept: "Em espanhol, mundo também é mundo. + pode montar uma frase.", starter: 'lugar = "mundo"\nprint(lugar)', target: "Hola, mundo", required: "lugar", hint: 'Junte "Hola, " e lugar com +.', say: { text: "Hola, mundo", lang: "es-ES" } }
);

const moduleOrder = window.MODULES.map((module) => module.id);
window.LESSONS.sort((a, b) => moduleOrder.indexOf(a.module) - moduleOrder.indexOf(b.module) || a.id - b.id);

// Uma atividade visual curta abre cada módulo; as primeiras missões têm prática extra.
window.VISUAL_LESSONS = { pt: {}, en: {}, es: {} };
function visual(id, kind, pt, en, es) {
  for (const [language, content] of Object.entries({ pt, en, es })) {
    window.VISUAL_LESSONS[language][id] = { kind, ...content };
  }
}
visual(1, "arrange",
  { question: "Monte uma instrução que mostra Lua na tela.", pieces: ['print', '(', '"Lua"', ')'], why: "print recebe o texto entre parênteses. As aspas dizem que Lua é texto." },
  { question: "Build an instruction that shows Moon on screen.", pieces: ['print', '(', '"Moon"', ')'], why: "print receives text inside parentheses. The quotes say Moon is text." },
  { question: "Ordena los bloques para mostrar Luna en pantalla.", pieces: ['print', '(', '"Luna"', ')'], why: "print recibe el texto entre paréntesis. Las comillas indican que Luna es texto." });
visual(2, "sort",
  { question: "Coloque cada parte na caixa certa.", bins: ["Instrução Python", "Texto da personagem"], cards: [{ label: "print", bin: 0 }, { label: '"Sou a Capitã Estrela"', bin: 1 }, { label: "( )", bin: 0 }], why: "print e os parênteses fazem parte da instrução; a fala fica entre aspas." },
  { question: "Put each part in the right box.", bins: ["Python instruction", "Character speech"], cards: [{ label: "print", bin: 0 }, { label: '"I am Captain Star"', bin: 1 }, { label: "( )", bin: 0 }], why: "print and parentheses form the instruction; speech goes between quotes." },
  { question: "Coloca cada parte en su caja.", bins: ["Instrucción Python", "Texto del personaje"], cards: [{ label: "print", bin: 0 }, { label: '"Soy la Capitana Estrella"', bin: 1 }, { label: "( )", bin: 0 }], why: "print y los paréntesis forman la instrucción; el mensaje va entre comillas." });
visual(3, "choose",
  { question: "O que aparece com print(2 + 3)?", options: ["23", "5", "2 + 3"], correct: 1, why: "Sem aspas, Python calcula a soma: 2 + 3 = 5." },
  { question: "What appears with print(2 + 3)?", options: ["23", "5", "2 + 3"], correct: 1, why: "Without quotes, Python adds the numbers: 2 + 3 = 5." },
  { question: "¿Qué aparece con print(2 + 3)?", options: ["23", "5", "2 + 3"], correct: 1, why: "Sin comillas, Python suma los números: 2 + 3 = 5." });
visual(4, "arrange",
  { question: "Organize as partes: primeiro guarde 3 moedas, depois mostre o valor.", pieces: ["moedas", "= 3", "print", "(moedas)"], why: "A primeira linha guarda 3. A segunda procura o valor de moedas." },
  { question: "Order the parts: first store 3 coins, then show the value.", pieces: ["moedas", "= 3", "print", "(moedas)"], why: "The first line stores 3. The second looks up moedas." },
  { question: "Ordena las partes: primero guarda 3 monedas y después muestra el valor.", pieces: ["moedas", "= 3", "print", "(moedas)"], why: "La primera línea guarda 3. La segunda busca el valor de moedas." });
visual(5, "choose",
  { question: "Se a = 2 e b = 3, quanto mostra print(a + b)?", options: ["2", "5", "23"], correct: 1, why: "Os nomes a e b guardam números. + soma 2 e 3." },
  { question: "If a = 2 and b = 3, what does print(a + b) show?", options: ["2", "5", "23"], correct: 1, why: "The names a and b store numbers. + adds 2 and 3." },
  { question: "Si a = 2 y b = 3, ¿qué muestra print(a + b)?", options: ["2", "5", "23"], correct: 1, why: "Los nombres a y b guardan números. + suma 2 y 3." });
visual(9, "sort",
  { question: "Lista: [\"Recife\", \"Lima\"]. Ligue cada índice à cidade.", bins: ["Índice [0]", "Índice [1]"], cards: [{ label: "Recife", bin: 0 }, { label: "Lima", bin: 1 }], why: "Python começa a contar as posições da lista pelo zero." },
  { question: "List: [\"Recife\", \"Lima\"]. Match each index to a city.", bins: ["Index [0]", "Index [1]"], cards: [{ label: "Recife", bin: 0 }, { label: "Lima", bin: 1 }], why: "Python starts counting list positions at zero." },
  { question: "Lista: [\"Recife\", \"Lima\"]. Une cada índice con su ciudad.", bins: ["Índice [0]", "Índice [1]"], cards: [{ label: "Recife", bin: 0 }, { label: "Lima", bin: 1 }], why: "Python empieza a contar las posiciones de la lista desde cero." });
visual(13, "arrange",
  { question: "Coloque os anos do mais antigo ao mais recente.", pieces: ["1500", "1822", "1889"], why: "Em uma linha do tempo, o menor ano vem antes. Povos indígenas viviam no território antes de 1500." },
  { question: "Put the years from earliest to latest.", pieces: ["1500", "1822", "1889"], why: "On a timeline, the smaller year comes first. Indigenous peoples lived in the territory before 1500." },
  { question: "Ordena los años del más antiguo al más reciente.", pieces: ["1500", "1822", "1889"], why: "En una línea de tiempo, el año menor va primero. Los pueblos indígenas vivían allí antes de 1500." });
visual(17, "sort",
  { question: "Separe os valores das unidades.", bins: ["Número", "Unidade"], cards: [{ label: "3", bin: 0 }, { label: "4", bin: 0 }, { label: "metros", bin: 1 }, { label: "segundos", bin: 1 }], why: "O número diz quanto; a unidade diz o que está sendo medido." },
  { question: "Sort values and units.", bins: ["Number", "Unit"], cards: [{ label: "3", bin: 0 }, { label: "4", bin: 0 }, { label: "metres", bin: 1 }, { label: "seconds", bin: 1 }], why: "A number says how much; a unit says what is measured." },
  { question: "Separa los valores de las unidades.", bins: ["Número", "Unidad"], cards: [{ label: "3", bin: 0 }, { label: "4", bin: 0 }, { label: "metros", bin: 1 }, { label: "segundos", bin: 1 }], why: "El número dice cuánto; la unidad dice qué se mide." });
visual(21, "sort",
  { question: "Texto ou número? Arraste ou toque nas peças.", bins: ["Texto: str", "Número: int"], cards: [{ label: '"12"', bin: 0 }, { label: "12", bin: 1 }, { label: '"Lua"', bin: 0 }, { label: "7", bin: 1 }], why: "As aspas mudam o tipo: \"12\" é texto; 12 é número." },
  { question: "Text or number? Drag or tap the pieces.", bins: ["Text: str", "Number: int"], cards: [{ label: '"12"', bin: 0 }, { label: "12", bin: 1 }, { label: '"Moon"', bin: 0 }, { label: "7", bin: 1 }], why: "Quotes change the type: \"12\" is text; 12 is a number." },
  { question: "¿Texto o número? Arrastra o toca las piezas.", bins: ["Texto: str", "Número: int"], cards: [{ label: '"12"', bin: 0 }, { label: "12", bin: 1 }, { label: '"Luna"', bin: 0 }, { label: "7", bin: 1 }], why: "Las comillas cambian el tipo: \"12\" es texto; 12 es un número." });
visual(25, "sort",
  { question: "Qual forma guarda cada coleção?", bins: ["Lista [ ]", "Dicionário { }"], cards: [{ label: '["azul", "verde"]', bin: 0 }, { label: '{"nome": "Luna"}', bin: 1 }], why: "Lista usa colchetes e posições; dicionário usa chaves com nomes." },
  { question: "Which shape stores each collection?", bins: ["List [ ]", "Dictionary { }"], cards: [{ label: '["blue", "green"]', bin: 0 }, { label: '{"name": "Luna"}', bin: 1 }], why: "Lists use square brackets and positions; dictionaries use named keys." },
  { question: "¿Qué forma guarda cada colección?", bins: ["Lista [ ]", "Diccionario { }"], cards: [{ label: '["azul", "verde"]', bin: 0 }, { label: '{"nombre": "Luna"}', bin: 1 }], why: "Las listas usan corchetes y posiciones; los diccionarios usan claves." });
visual(29, "choose",
  { question: "energia = 7. Qual pergunta devolve True?", options: ["energia > 10", "energia > 5", "energia == 5"], correct: 1, why: "7 é maior que 5, mas não é maior que 10 nem igual a 5." },
  { question: "energia = 7. Which question returns True?", options: ["energia > 10", "energia > 5", "energia == 5"], correct: 1, why: "7 is greater than 5, but it is not greater than 10 or equal to 5." },
  { question: "energia = 7. ¿Qué pregunta devuelve True?", options: ["energia > 10", "energia > 5", "energia == 5"], correct: 1, why: "7 es mayor que 5, pero no es mayor que 10 ni igual a 5." });
visual(33, "arrange",
  { question: "Ordene o plano do robô antes de programar.", pieces: ["1. Escolher os passos", "2. Repetir com for", "3. Mostrar cada passo"], why: "Um algoritmo fica mais fácil de escrever quando sabemos a ordem das ações." },
  { question: "Order the robot's plan before coding.", pieces: ["1. Choose the steps", "2. Repeat with for", "3. Show each step"], why: "An algorithm is easier to write when we know the order of actions." },
  { question: "Ordena el plan del robot antes de programar.", pieces: ["1. Elegir los pasos", "2. Repetir con for", "3. Mostrar cada paso"], why: "Un algoritmo es más fácil de escribir si conocemos el orden de las acciones." });
visual(37, "arrange",
  { question: "Monte uma saudação em inglês com Python.", pieces: ['print', '(', '"Hello!"', ')'], why: "A palavra inglesa fica entre aspas, assim como qualquer outro texto." },
  { question: "Build an English greeting with Python.", pieces: ['print', '(', '"Hello!"', ')'], why: "The English word goes between quotes, just like any other text." },
  { question: "Construye un saludo en inglés con Python.", pieces: ['print', '(', '"Hello!"', ')'], why: "La palabra inglesa va entre comillas, como cualquier otro texto." });
visual(40, "arrange",
  { question: "Monte uma saudação em espanhol com Python.", pieces: ['print', '(', '"¡Hola!"', ')'], why: "Os dois sinais de exclamação fazem parte do texto entre aspas." },
  { question: "Build a Spanish greeting with Python.", pieces: ['print', '(', '"¡Hola!"', ')'], why: "Both exclamation marks belong to the text between quotes." },
  { question: "Construye un saludo en español con Python.", pieces: ['print', '(', '"¡Hola!"', ')'], why: "Los dos signos de exclamación forman parte del texto entre comillas." });

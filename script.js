const questions = [
  {
    category: "Características",
    question: "¿Cómo se transmitían muchas obras de la literatura medieval?",
    answers: ["De boca en boca", "Solo mediante libros impresos", "Por medio de la televisión", "Únicamente en universidades"],
    correct: 0,
    explanation: "La oralidad era una característica importante: las obras se transmitían de boca en boca."
  },
  {
    category: "Características",
    question: "¿Qué finalidad tenían muchas obras medievales, además de entretener?",
    answers: ["Enseñar valores y conocimientos", "Explicar descubrimientos científicos modernos", "Promocionar el comercio marítimo", "Describir viajes espaciales"],
    correct: 0,
    explanation: "El didactismo buscaba enseñar valores y conocimientos."
  },
  {
    category: "Sociedad medieval",
    question: "¿Qué grupo social estaba formado por religiosos que difundían obras religiosas y educativas?",
    answers: ["La nobleza", "El clero", "El pueblo llano", "La burguesía"],
    correct: 1,
    explanation: "El clero estaba formado por religiosos."
  },
  {
    category: "Épica medieval",
    question: "¿Qué narra principalmente El Cantar de Mio Cid?",
    answers: ["Las hazañas del Cid Campeador", "La vida de Gonzalo de Berceo", "Los cuentos de El conde Lucanor", "La historia del Arcipreste de Hita"],
    correct: 0,
    explanation: "El Cantar de Mio Cid narra las hazañas del Cid Campeador."
  },
  {
    category: "Épica medieval",
    question: "¿En cuántas partes se divide El Cantar de Mio Cid, según los apuntes?",
    answers: ["Dos", "Tres", "Cuatro", "Cinco"],
    correct: 1,
    explanation: "Se divide en tres partes: destierro, bodas y afrenta de Corpes."
  },
  {
    category: "Poesía",
    question: "¿Cuál de estas obras se relaciona con la lírica tradicional o popular?",
    answers: ["Jarchas", "Milagros de Nuestra Señora", "El conde Lucanor", "Libro de buen amor"],
    correct: 0,
    explanation: "En los apuntes se destacan las jarchas, las cantigas de amigo y los villancicos."
  },
  {
    category: "Poesía culta",
    question: "¿Qué influencia destaca en la lírica culta?",
    answers: ["La poesía provenzal", "La novela de aventuras moderna", "El teatro barroco", "La poesía futurista"],
    correct: 0,
    explanation: "La lírica culta recibió la influencia de la poesía provenzal."
  },
  {
    category: "Mester de clerecía",
    question: "¿En qué siglo surge el mester de clerecía?",
    answers: ["Siglo X", "Siglo XI", "Siglo XIII", "Siglo XV"],
    correct: 2,
    explanation: "El mester de clerecía surge en el siglo XIII."
  },
  {
    category: "Mester de clerecía",
    question: "¿Qué tipo de poesía caracteriza al mester de clerecía?",
    answers: ["Poesía culta escrita por clérigos", "Poesía anónima exclusivamente oral", "Poesía escrita por comerciantes", "Poesía teatral"],
    correct: 0,
    explanation: "Era poesía culta escrita por clérigos, con temas religiosos y didácticos."
  },
  {
    category: "Mester de clerecía",
    question: "¿Qué esquema métrico utiliza la cuaderna vía según los apuntes?",
    answers: ["Cuatro versos alejandrinos con rima consonante AAAA", "Dos versos octosílabos con rima asonante", "Tres versos libres", "Cinco versos endecasílabos"],
    correct: 0,
    explanation: "La cuaderna vía está formada por estrofas de cuatro versos alejandrinos (14 sílabas) con rima consonante AAAA."
  },
  {
    category: "Autores",
    question: "¿Qué obra de Gonzalo de Berceo aparece en los apuntes?",
    answers: ["Libro de buen amor", "Milagros de Nuestra Señora", "El Cantar de Mio Cid", "El conde Lucanor"],
    correct: 1,
    explanation: "Gonzalo de Berceo escribió Milagros de Nuestra Señora, con 25 relatos en los que la Virgen salva a pecadores."
  },
  {
    category: "Autores y prosa",
    question: "¿Cuál es la obra más importante de Don Juan Manuel mencionada en los apuntes?",
    answers: ["El conde Lucanor", "Milagros de Nuestra Señora", "Libro de buen amor", "El Cantar de Mio Cid"],
    correct: 0,
    explanation: "El conde Lucanor está formado por 51 cuentos con finalidad didáctica."
  },
  {
    category: "Autores y obras",
    question: "¿Quién escribió el Libro de buen amor?",
    answers: ["Gonzalo de Berceo", "Don Juan Manuel", "Arcipreste de Hita", "Alfonso X"],
    correct: 2,
    explanation: "El Arcipreste de Hita es el autor del Libro de buen amor."
  },
  {
    category: "Prosa medieval",
    question: "¿Qué afirmación sobre la prosa medieval aparece en los apuntes?",
    answers: ["Se desarrolla más tarde que la poesía", "Se desarrolla antes que toda poesía", "No utiliza el castellano", "Desaparece en el siglo XIII"],
    correct: 0,
    explanation: "Según los apuntes, la prosa medieval se desarrolla más tarde que la poesía."
  },
  {
    category: "Prosa medieval",
    question: "¿Qué rey favoreció el desarrollo de la prosa mediante la Escuela de Traductores de Toledo?",
    answers: ["Fernando III", "Alfonso X", "Alfonso VI", "Carlos I"],
    correct: 1,
    explanation: "Alfonso X favoreció el desarrollo de la prosa mediante la Escuela de Traductores de Toledo."
  }
];

const questionCounter = document.getElementById("question-counter");
const scoreLabel = document.getElementById("score-label");
const progressBar = document.getElementById("progress-bar");
const category = document.getElementById("category");
const questionTitle = document.getElementById("question");
const answersBox = document.getElementById("answers");
const feedback = document.getElementById("feedback");
const nextButton = document.getElementById("next-button");
const quizContent = document.getElementById("quiz-content");
const resultScreen = document.getElementById("result-screen");
const finalScore = document.getElementById("final-score");
const finalMessage = document.getElementById("final-message");
const restartButton = document.getElementById("restart-button");

let currentQuestion = 0;
let score = 0;
let answered = false;

function showQuestion() {
  answered = false;
  const item = questions[currentQuestion];
  questionCounter.textContent = `Pregunta ${currentQuestion + 1} de ${questions.length}`;
  scoreLabel.textContent = `Aciertos: ${score}`;
  progressBar.style.width = `${(currentQuestion / questions.length) * 100}%`;
  category.textContent = item.category;
  questionTitle.textContent = item.question;
  answersBox.innerHTML = "";
  feedback.textContent = "";
  feedback.className = "feedback";
  nextButton.disabled = true;
  nextButton.textContent = currentQuestion === questions.length - 1 ? "Ver resultado" : "Siguiente";

  item.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.className = "answer";
    button.type = "button";
    button.textContent = `${String.fromCharCode(65 + index)}. ${answer}`;
    button.addEventListener("click", () => chooseAnswer(index));
    answersBox.appendChild(button);
  });
}

function chooseAnswer(selectedIndex) {
  if (answered) return;
  answered = true;
  const item = questions[currentQuestion];
  const buttons = [...answersBox.querySelectorAll("button")];
  buttons.forEach((button, index) => {
    button.disabled = true;
    if (index === item.correct) button.classList.add("correct");
    if (index === selectedIndex && index !== item.correct) button.classList.add("incorrect");
  });

  if (selectedIndex === item.correct) {
    score++;
    feedback.textContent = `¡Correcto! ${item.explanation}`;
    feedback.classList.add("good");
  } else {
    feedback.textContent = `No exactamente. ${item.explanation}`;
    feedback.classList.add("bad");
  }
  scoreLabel.textContent = `Aciertos: ${score}`;
  nextButton.disabled = false;
}

function showResults() {
  quizContent.hidden = true;
  resultScreen.hidden = false;
  progressBar.style.width = "100%";
  questionCounter.textContent = "Resultado final";
  scoreLabel.textContent = `${score} / ${questions.length}`;
  finalScore.textContent = `${score} de ${questions.length}`;
  const percentage = score / questions.length;
  if (percentage === 1) finalMessage.textContent = "¡Excelente! Dominas estos contenidos.";
  else if (percentage >= 0.7) finalMessage.textContent = "¡Muy bien! Has comprendido gran parte del tema.";
  else if (percentage >= 0.4) finalMessage.textContent = "Buen intento. Repasa los apuntes y vuelve a probar.";
  else finalMessage.textContent = "Te vendrá bien repasar el material. ¡Puedes intentarlo otra vez!";
}

nextButton.addEventListener("click", () => {
  if (!answered) return;
  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    showQuestion();
  } else {
    showResults();
  }
});

restartButton.addEventListener("click", () => {
  currentQuestion = 0;
  score = 0;
  resultScreen.hidden = true;
  quizContent.hidden = false;
  showQuestion();
});

showQuestion();

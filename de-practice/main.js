import { createSnowflakes } from "./js/snow.js";
import { Quiz } from "./js/quiz.js";
import { questions } from "./data/questions.js";

let quiz;

function createLandingPage() {
  const app = document.querySelector("#app");
  app.innerHTML = `
    <div class="landing-page">
      <h1 class="title">Deutsch Lernen</h1>
      <h2>🎄 Christmas Edition 🎄</h2>
      <p class="description">
        Practice your German with this festive Christmas-themed quiz!
        Complete 10 questions to test your knowledge of German vocabulary
        and sentence structure.
      </p>
      <button class="start-button" onclick="startQuiz()">Start Quiz</button>
    </div>
  `;
}

function displayQuestion() {
  const question = quiz.getCurrentQuestion();
  const progress = quiz.getProgress();

  const app = document.querySelector("#app");
  app.innerHTML = `
    <div class="quiz-container active">
      <div class="progress-bar">
        <div class="progress-fill" style="width: ${(progress.current / progress.total) * 100}%"></div>
      </div>
      <p>Question ${progress.current}/${progress.total}</p>
      <div class="question-container">
        <h2>${question.sentence}</h2>
        <div class="options">
          ${question.options
            .map(
              (option) => `
            <button class="option" onclick="checkAnswer('${option}')">${option}</button>
          `,
            )
            .join("")}
        </div>
      </div>
    </div>
  `;
}

window.checkAnswer = function (answer) {
  const result = quiz.checkAnswer(answer);
  const questionContainer = document.querySelector(".question-container");
  const options = questionContainer.querySelectorAll(".option");

  // Disable all buttons and apply correct/incorrect styling
  options.forEach((button) => {
    button.disabled = true;
    const buttonAnswer = button.textContent;
    if (buttonAnswer === result.correctAnswer) {
      button.classList.add("correct");
    } else if (buttonAnswer === answer && !result.isCorrect) {
      button.classList.add("incorrect");
    }
  });

  // Add feedback and next question button
  questionContainer.innerHTML += `
    <div class="feedback ${result.isCorrect ? "correct" : "incorrect"}">
      ${result.isCorrect ? "✓ Richtig!" : "✗ Falsch!"}<br>
      Correct answer: ${result.correctAnswer}<br>
      ${result.translation}
    </div>
    <button class="next-button" onclick="nextQuestion()">
      Next Question
    </button>
  `;

  // Show the next button with animation
  setTimeout(() => {
    if (quiz.hasNextQuestion()) {
      const nextButton = document.querySelector(".next-button");
      nextButton.classList.add("visible");
    } else {
      showResults();
    }
  }, 2000);
};

window.nextQuestion = function () {
  if (quiz.hasNextQuestion()) {
    quiz.nextQuestion();
    displayQuestion();
  }
};

function showResults() {
  const progress = quiz.getProgress();
  const app = document.querySelector("#app");
  app.innerHTML = `
    <div class="landing-page">
      <h1 class="title">Quiz Complete!</h1>
      <p class="description">
        You scored ${progress.score} out of ${progress.total}!
        ${progress.score === progress.total ? "🎄 Perfect score! 🎄" : ""}
      </p>
      <button class="start-button" onclick="startQuiz()">Try Again</button>
    </div>
  `;
}

window.startQuiz = function () {
  quiz = new Quiz(questions);
  displayQuestion();
};

// Initialize the app
createLandingPage();
createSnowflakes();

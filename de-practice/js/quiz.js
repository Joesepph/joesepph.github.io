export class Quiz {
  constructor(questions) {
    this.questions = this.shuffleQuestions(questions);
    this.currentQuestion = 0;
    this.score = 0;
    this.totalQuestions = Math.min(10, questions.length);
  }

  shuffleQuestions(questions) {
    return [...questions].sort(() => Math.random() - 0.5);
  }

  getCurrentQuestion() {
    return this.questions[this.currentQuestion];
  }

  checkAnswer(answer) {
    const currentQuestion = this.getCurrentQuestion();
    const isCorrect = currentQuestion.correct === answer;
    if (isCorrect) this.score++;
    return {
      isCorrect,
      correctAnswer: currentQuestion.correct,
      translation: currentQuestion.translation,
    };
  }

  hasNextQuestion() {
    return this.currentQuestion < this.totalQuestions - 1;
  }

  nextQuestion() {
    if (this.hasNextQuestion()) {
      this.currentQuestion++;
      return true;
    }
    return false;
  }

  getProgress() {
    return {
      current: this.currentQuestion + 1,
      total: this.totalQuestions,
      score: this.score,
    };
  }
}

// Define your questions and answers
const quizData = [
    { question: "What is JavaScript?", options: ["A programming language", "A type of coffee", "A country in Europe"], correctAnswer: "A programming language" },
    // Add more questions...
    { question: "What is Html?", options: ["A programming language", "A type of red wine", "A country in USA"], correctAnswer: "A programming language" },
    { question: "What is UTAustin?", options: ["A programming language", "A University", "A country in Europe"], correctAnswer: "A University" },
  ];
  
  let currentQuestionIndex = 0;
  let timeLimit = 60; // Set your initial time limit
  let timerInterval;
  
  const startButton = document.getElementById("start-btn");
  const submitButton = document.getElementById("submit-btn");
  
  // Event listener for the start button
  startButton.addEventListener("click", startQuiz);
  
  // Event listener for the submit button
  submitButton.addEventListener("click", submitScore);
  
  function startQuiz() {
    startButton.disabled = true;
    timerInterval = setInterval(updateTimer, 1000);
    showQuestion();
    document.getElementById("question").textContent = quizData [0].question
  }
  function updateTimer(){

  }


  function showQuestion() {
    const questionContainer = document.getElementById("question");
    const optionsContainer = document.getElementById("options");
  
    // Display current question
    const currentQuestion = quizData[currentQuestionIndex];
    questionContainer.textContent = currentQuestion.question;
  
    // Display answer options
    optionsContainer.innerHTML = "";
    currentQuestion.options.forEach((option, index) => {
      const optionButton = document.createElement("button");
      optionButton.textContent = option;
      optionButton.addEventListener("click", () => checkAnswer(option));
      optionsContainer.appendChild(optionButton);
    });
  }
  
  function checkAnswer(selectedAnswer) {
    //const question = quizData[currentQuestionIndex];
     selectedAnswer = 2
    if (selectedAnswer === quizData[[0]].correctAnswer) {
      // Correct answer
      // Update score or perform other actions
    } else {
      // Incorrect answer
      timeLimit -= 10; // Subtract time for incorrect answers
    }
  
    currentQuestionIndex++;
  
    if (currentQuestionIndex < quizData.length) {
      // Show the next question
      showQuestion();
    } else {
      // End the game
      endGame();
    }
  }
  
  function endGame() {
    clearInterval(timerInterval);
    const timerDisplay = document.getElementById("time");
    timerDisplay.textContent = timeLimit--; // Display remaining time
    // Show initials input and submit button
    document.getElementById("initials").style.display = "inline";
    submitButton.style.display = "inline";
  }
  
  function submitScore() {
    const initialsInput = document.getElementById("initials").value;
    // Save initials and score in high scores storage
    // You can use localStorage or another storage solution
    // Example: localStorage.setItem("highScore", JSON.stringify({ initials: initialsInput, score: timeLimit }));
    alert("Score submitted!");
  }

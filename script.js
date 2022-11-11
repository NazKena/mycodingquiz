function buildQuiz() {
  
  document.getElementById("showQuiz").style.visibility = "hidden"
  const output = [];

  myQuestions.forEach((currentQuestion, questionNumber) => {
    const answers = [];

    for (letter in currentQuestion.answers) {
      answers.push(
        `<label>
        <input type="radio" name="question${questionNumber}" value="${letter}">
        ${letter} :
        ${currentQuestion.answers[letter]}
      </label>`
      );
    }

    output.push(
      `<div class="question"> ${currentQuestion.question} </div>
    <div class="answers"> ${answers.join("")} </div>`
    );
  });

  quizContainer.innerHTML = output.join("");
}

let myQuestions = [
    {
        question : "How do you add comments in HTML?",
        answers : {
            a : "<!--",
            b : "<..",
            c : "//"
        },
     rightAnswer : "a"   
     },

     {
        question: "How do you stack contents?",
        answers : {
            a : "justify-content",
            b : "text-align",
            c : "flex-direction",
        },
     rightAnswer: "c",   
     },

     {
        question: "What does this JavaScript comparison operator mean ('!=')?",
        answers : {
            a : "equal to",
            b : "not equal to",
            c : "error",
        },
        rightAnswer : "b",
     }

]








function startTimer(duration, display) {
  var timer = duration, minutes, seconds;
  setInterval(function () {
      minutes = parseInt(timer / 60, 10)
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = minutes + ":" + seconds;

      if (--timer < 0) {
          timer = 0;
         
      }
  }, 1000);
}

window.onload = function () {
  var time = 600 / 2, 
      display = document.querySelector('#safeTimerDisplay');
  startTimer(time, display);
};
function start
  document.querySelector('start') 


function generateQuiz ()

let storeQuiz = document.getElementById ("quiz")
let storeResults = document.getElementById ("results")
let beginButton = document.getElementById ("begin-quiz")

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

let score = 0;

for (let i=0; i <myQuestions.length; i++;){
    let answer = window.prompt(myQuestions[i].prompt);
    if(answer == myQuestions[i]).rightAnswer {
        score++;
        alert("Correct!");

    }

}


console.log(myQuestions)

let begin = true;
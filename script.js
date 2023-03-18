// Questions will be asked
const Questions = [{
    id: 0,
    q: "How do you add comments in HTML?",
    a: [{ text: "<!--", isCorrect: true },
        { text: "<..", isCorrect: false },
        { text: "//", isCorrect: false },
        { text: "--!!", isCorrect: false }
    ]

},
{
    id: 1,
    q: "How do you stack contents?",
    a: [{ text: "justify-content", isCorrect: false,},
        { text: "text-align", isCorrect: false },
        { text: "flex-direction", isCorrect: true },
        { text: "display-stack", isCorrect: false }
    ]

},
{
    id: 2,
    q:  "What does this JavaScript comparison operator mean ('!=')?",
    a: [{ text: "equal to", isCorrect: false },
        { text: "not equal to", isCorrect: true },
        { text: "error", isCorrect: true },
        { text: "not correct", isCorrect: false }
    ]

}
]


// Set start
var start = true;

// Iterate
function iterate(id) {

// Here we are displaying the result
var result = document.getElementsByClassName("result");
result[0].innerText = "";

// This is where we get the question
const question = document.getElementById("question");


// Setting the question text
question.innerText = Questions[id].q;

// Options for the questions are retrieved
const selection1 = document.getElementById('selection1');
const selection2 = document.getElementById('selection2');
const selection3 = document.getElementById('selection3');
const selection4 = document.getElementById('selection4');


// Providing option text
selection1.innerText = Questions[id].a[0].text;
selection2.innerText = Questions[id].a[1].text;
selection3.innerText = Questions[id].a[2].text;
selection4.innerText = Questions[id].a[3].text;

// Providing the true or false value to the options
selection1.value = Questions[id].a[0].isCorrect;
selection2.value = Questions[id].a[1].isCorrect;
selection3.value = Questions[id].a[2].isCorrect;
selection4.value = Questions[id].a[3].isCorrect;

var selected = "";

// Show selection for op1
selection1.addEventListener("click", () => {
    selection1.style.backgroundColor = "lightgoldenrodyellow";
    selection2.style.backgroundColor = "lightskyblue";
    selection3.style.backgroundColor = "lightskyblue";
    selection4.style.backgroundColor = "lightskyblue";
    selected = selection1.value;
})

// Show selection for op2
selection2.addEventListener("click", () => {
    selection1.style.backgroundColor = "lightskyblue";
    selection2.style.backgroundColor = "lightgoldenrodyellow";
    selection3.style.backgroundColor = "lightskyblue";
    selection4.style.backgroundColor = "lightskyblue";
    selected = selection2.value;
})

// Show selection for op3
selection3.addEventListener("click", () => {
    selection1.style.backgroundColor = "lightskyblue";
    selection2.style.backgroundColor = "lightskyblue";
    selection3.style.backgroundColor = "lightgoldenrodyellow";
    selection4.style.backgroundColor = "lightskyblue";
    selected = selection3.value;
})

// Show selection for op4
selection4.addEventListener("click", () => {
    selection1.style.backgroundColor = "lightskyblue";
    selection2.style.backgroundColor = "lightskyblue";
    selection3.style.backgroundColor = "lightskyblue";
    selection4.style.backgroundColor = "lightgoldenrodyellow";
    selected = selection4.value;
})

// Grabbing the evaluate button
const evaluate = document.getElementsByClassName("evaluate");

// Evaluate method
evaluate[0].addEventListener("click", () => {
    if (selected == "true") {
        result[0].innerHTML = "True";
        result[0].style.color = "green";
    } else {
        result[0].innerHTML = "False";
        result[0].style.color = "red";
    }
})
}

if (start) {
iterate("0");
}

// Next button and method
const next = document.getElementsByClassName('next')[0];
var id = 0;

next.addEventListener("click", () => {
start = false;
if (id < 2) {
    id++;
    iterate(id);
    console.log(id);
}

})

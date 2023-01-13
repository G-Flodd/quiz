var startButton = document.getElementById("start");
var qContainerElement = document.getElementById("questions");
let currentQuestionIndex
var questionTitleElement = document.getElementById("question-title")
var choicesElement = document.getElementById("choices")

startButton.addEventListener("click", startQuiz);

function startQuiz() {
    console.log("started");
    startButton.classList.add("hide");
    currentQuestionIndex = 0;
    qContainerElement.classList.remove("hide");
    setNextQuestion();
}

function setNextQuestion() {
    showQuestion(questions[currentQuestionIndex]);
}
function showQuestion(question) {
    questionTitleElement.innerText = question.question;
    for(i=0; i < questions.length; i++){
        var ans = questions[i];
        console.log(ans.answer);
        if (ans.correct = "correct"){
            button.dataset.correct = ans.correct
        }
    }
    /*question.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("button");
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
        choicesElement.appendChild(button);
    })*/
}

function selectAnswer() {


}



var questions = [
    {
        question: " Fav word",
        answer: [
            { text: 'It is a .........................', correct: true },
            { text: " it is a ........", correct: false }

        ]
    }
]


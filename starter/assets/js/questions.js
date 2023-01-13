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
    questionTitleElement.innerText = questionsArray[0].question;
    for (i = 0; i < questions.length; i++) {
        var ans = questions[i];
        console.log(ans.answer);
        if (ans.correct = "correct") {
            button.dataset.correct = ans.correct
        }
    }
    //Function To Render My Answers// 
    function showAnswer(questionsArray) {
        console.log(questionsArray)
    }
    showAnswer(questionsArray)
}

function selectAnswer() {

}

var question1 =
{
    question: "Fav sport",
    answer: [
        { text: 'Football', correct: true },
        { text: "Golf", correct: false },
        { text: "BasketBall", correct: false },
        { text: "Rugby", correct: false }
    ]
}

var question2 =
{
    question: " Fav colour",
    answer: [
        { text: "Blue", correct: true },
        { text: "Green", correct: false },
        { text: "Red", correct: false },
        { text: "Purple", correct: false },
    ]
}

var question3 =
{
    question: " Fav colour",
    answer: [
        { text: "Blue", correct: true },
        { text: "Green", correct: false },
        { text: "Red", correct: false },
        { text: "Purple", correct: false },
    ]
}

var question4 =
{
    question: " Fav colour",
    answer: [
        { text: "Blue", correct: true },
        { text: "Green", correct: false },
        { text: "Red", correct: false },
        { text: "Purple", correct: false },
    ]
}

var question5 =
{
    question: " Fav colour",
    answer: [
        { text: "Blue", correct: true },
        { text: "Green", correct: false },
        { text: "Red", correct: false },
        { text: "Purple", correct: false },
    ]
}

var questionsArray =
    [
        question1, question2, question3, question4, question5
    ]
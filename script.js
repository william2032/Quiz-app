const quizData = [
    {
        question: "I'm tall when I'm young, and I'm short when I'm old. What am I?",
        a: "The future",
        b: "A promise",
        c: "No answer",
        d: "A candle",
        correct: "d",
    },
    {
        question: "What goes up but never comes down?",
        a: "An echo",
        b: "Your age",
        c: "Smoke",
        d: "All Of The Above",
        correct: "b",
    },
    {
        question: " What is always in front of you but can't be seen?",
        a: "Your nose",
        b: "Darkness",
        c: "The future",
        d: "None Of The Above",
        correct: "c",
    },
    {
        question: " What is full of holes but still holds water?",
        a: " A sponge",
        b: "It's lid",
        c: "The clouds",
        d: "None Of The Above",
        correct: "a",
    },
    {
        question: " I'm light as a feather, yet the strongest person can't hold me for five minutes.",
        a: "A secret",
        b: "Fire",
        c: "Yarn",
        d: "Your breath",
        correct: "d",
    },
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEL = document.querySelector('#question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitButton = document.getElementById('submit'); // Get the submit button
const answerDisplay = document.getElementById('answerDisplay');
let currentQuiz = 0;
let  score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEL.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}
function deselectAnswers() {
    answerEls.forEach( answerEl => answerEl.checked = false)
        
};

function getSelected() {
    let answer;
    answerEls.forEach( answerEl => {
        if( answerEl.checked) {
            answer = answerEl.id;
        }
    })
    return answer;
}


submit.addEventListener('click', ()=> {
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        } else {
            // Display the wrong answer for 2 seconds before moving to the next question
            const h2 = document.createElement('h2');
            h2.textContent = `Wrong answer! The correct answer is ${quizData[currentQuiz].correct.toUpperCase()}.`;
            answerDisplay.innerHTML = '';
            answerDisplay.appendChild(h2);

            setTimeout(() => {
                answerDisplay.innerHTML = ''; // Clear the content after 2 seconds

                // Proceed to the next question
                currentQuiz++;

                if (currentQuiz < quizData.length) {
                    loadQuiz();
                } else {
                    // Display the final score when all questions are answered
                    quiz.innerHTML = `
                        <h2>You answered ${score}/${quizData.length} questions correctly</h2>
                        <button onclick="location.reload()">Reload</button>`;
                }
            }, 2000);
            return;
        }
    currentQuiz++;

    if(currentQuiz < quizData.length) {
        loadQuiz()
    } else {
        quiz.innerHTML = `
        <h2>You answered ${score}/${quizData.length} questions correctly</h2>
        <button onclick="location.reload()">Reload</button>`
    }
}
});
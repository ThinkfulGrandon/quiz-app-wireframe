

//------------ SCORE KEEPERS-----------

let score = 0;
let currentQuestion = 0;

function updateScore() {
    score++;
    $('.score').text(score);
}

function updateCurrentQuestion() {
    currentQuestion++;
    $('.current-question').text(currentQuestion);

}

//------------ SCORE KEEPERS-----------


function removeStartQuizButton() {
    $('.js-start-form').remove();
    console.log("removeStartQuiz ran");
};

function addTrackers() {
    $('header').append(`
    <div class="trackers">
            <p>
                <span class="current-question">Current Question: ${currentQuestion} / 8</span>
                <span class="score">Correct: ${score} / ${currentQuestion}</span>
            </p>
        </div>`
        );
};



function renderQuestion() {
    $('.js-question-area').append( `
    <div class="question">
        <p>
            ${questions[currentQuestion].question}
        </p>
        <form>
            <ul>
                <li>
                    <input type="radio" id="answer" name="answer" value="Answer 1">
                    <label for="answer1">${questions[currentQuestion].answers[0]}</label>
                </li>
                <li>
                    <input type="radio" id="answer" name="answer" value="Answer 2">
                    <label for="answer2">${questions[currentQuestion].answers[1]}</label>
                </li>
                <li>
                    <input type="radio" id="answer" name="answer" value="Answer 3">
                    <label for="answer3">${questions[currentQuestion].answers[2]}</label>
                </li>
                <li>
                    <input type="radio" id="answer" name="answer" value="Answer 4">
                    <label for="answer4">${questions[currentQuestion].answers[3]}</label>
                </li>
            </ul>
        
            <input id="question-submit" type="button" value="Submit Answer">
        </form>
    </div>`
    );
};



function startQuiz() {
    $('.js-start-form').on('click', event => {
        removeStartQuizButton();
        renderQuestion();
        updateCurrentQuestion();
        addTrackers();
    });
};


 



function submitAnswer() {
    $('.js-question-area').on('click', '#question-submit', event => {
        updateCurrentQuestion();
        renderQuestion();
    });
};

$(submitAnswer());















// -----------------Callback function ------------------------

function runQuizApp() {
    startQuiz();
}

$(runQuizApp());

// -----------------Callback function ------------------------


// --------- Questions object Array -------------

const questions = [
    {
       question: 'How many bones are there in a typical human body?',
       answers: ['300', '140', '250', '206'], 
       correct: '206'
    }, 
    {
        question: 'Which is the largest internal organ?',
        answers: ['Stomach', 'Kidney', 'Liver', 'Large intestine'], 
        correct: 'Liver'
     }, 
     {
        question: 'What is the bone going between the knee and the hip?',
        answers: ['Femur', 'Radius', 'Mandible', 'Orbital'], 
        correct: 'Femur'
     }, 
     {
        question: 'Which of the following is not one of the 5 senses?',
        answers: ['Touch', 'Balance', 'Sight', 'Smell'],
        correct:'Balance'
     }, 
     {
        question: '_____ are the structures that carry electrical signals to and from your brain.',
        answers: ['Blood vessels', 'Bones', 'Nerves', 'Lymph vessels'],
        correct:'Nerves'
     }, 
     {
        question: 'The inner ear has 3 bones in it on each side. Which of these is not one of them?',
        answers: ['Stapes', 'Malleus', 'Incus', 'Phalange'],
        correct:'Phalange'
     }, 
     {
        question: 'Food and liquid travel from the mouth to the stomach via the _____.',
        answers: ['Aorta', 'Esophagus', 'Trachea', 'Cochlea'],
        correct:'Esophagus'
     }, 
     {
        question: 'This part of the brain is responsible for “higher level” thinking and problem solving.',
        answers: ['Frontal cortex', 'Limbic system', 'Optic nerve', 'Brainstem'],
        correct:'Frontal cortex'
     }, 
];

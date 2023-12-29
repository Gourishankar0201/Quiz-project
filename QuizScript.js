const questions = [
    {
        question: 'What is a correct syntax to output "Hello World" in Java?',
        answers: [
            { text: 'System.out.println("Hello World"); ', correct:true},
            { text: 'Console.WriteLine("Hello World");', correct:false},
            { text: 'print ("Hello World");', correct:false},
            { text: 'echo("Hello World");', correct:false},
        ]
     },
     {
        question: 'Java is short for "JavaScript".',
        answers: [
            { text: 'True', correct:false},
            { text: 'False ', correct:true},
        ]
     },
     {
        question: 'How do you insert COMMENTS in Java code?',
        answers: [
            { text: '# This is a comment', correct:false},
            { text: '/* This is a comment', correct:false},
            { text: '// This is a comment ', correct:true},
        ]
     },
     {
        question: 'Which data type is used to create a variable that should store text?',
        answers: [
            { text: 'string', correct:false},
            { text: 'String ', correct:true},
            { text: 'myString', correct:false},
            { text: 'Txt', correct:false},
        ]
     },
     {
        question: 'How do you create a variable with the numeric value 5?',
        answers: [
            { text: 'int x = 5; ', correct:true},
            { text: 'float x = 5;', correct:false},
            { text: 'x = 5;', correct:false},
            { text: 'num x = 5', correct:false},
        ]
     },
     {
        question: 'How do you create a variable with the floating number 2.8?',
        answers: [
            { text: 'byte x = 2.8f', correct:false},
            { text: 'float x = 2.8f;', correct:true},
            { text: 'x = 2.8f;', correct:false},
            { text: 'int x = 2.8f;', correct:false},
        ]
     },
     {
        question: 'Which method can be used to find the length of a string?',
        answers: [
            { text: 'len()', correct:false},
            { text:'getLength()', correct:false},
            { text: 'getSize()', correct:false},
            { text: 'length() ', correct:true},
        ]
     },
     {
        question: 'Which operator is used to add together two values?',
        answers: [
            { text: 'The + sign  ', correct:true},
            { text: 'The & sign', correct:false},
            { text: 'The * sign', correct:false},
            { text: 'The (add) sign', correct:false},
        ]
     } ,
     {
        question: 'The value of a string variable can be surrounded by single quotes.',
        answers: [
            { text: 'True', correct:false},
            { text: 'False  ', correct:true},
        ]
           
     },
     {
        question:'Which method can be used to return a string in upper case letters?',
        answers: [
            { text: 'upperCase() ', correct:false},
            { text: 'touppercase()', correct:false},
            { text: 'toUpperCase() ', correct:true},
            { text: 'tuc()', correct:false},
        ]
     },
     {
        question:'Which operator can be used to compare two values?',
        answers: [
            { text: '=', correct:false},
            { text: '==', correct:true},
            { text: '<>', correct:false},
            { text: '><', correct:false},
        ]
     },
     {
        question: 'Which keyword is used to return a value inside a method?',
        answers: [
            { text: 'break', correct:false},
            { text: 'void', correct:false},
            { text: 'get', correct:false},
            { text: 'return  ', correct:true},
        ]
     },
     {
        question: 'How do you create a method in Java?',
        answers: [
            { text: 'methodName.', correct:false},
            { text: 'methodName() ', correct:true},
            { text: '(methodName)', correct:false},
            { text: 'methodName[]', correct:false},
        ]
     },
     {
        question: 'How do you call a method in Java?',
        answers: [
            { text: 'methodName[];', correct:false},
            { text: 'methodName;', correct:false},
            { text: 'methodName();', correct:true},
            { text: '(methodName);', correct:false},
        ]
     },
     {
        question: 'Which keyword is used to create a class in Java?',
        answers: [
            { text: 'class', correct:true},
            { text: 'MyClass', correct:false},
            { text: 'class()', correct:false},
            { text: 'className', correct:false},
        ]
     },
     {
        question:'What is the correct way to create an object called myObj of MyClass?',
        answers: [
            { text: 'new myObj = MyClass();', correct:false},
            { text: 'class MyClass = new myObj();', correct:false},
            { text: 'MyClass myObj = new MyClass(); ', correct:true},
            { text: 'class myObj = new MyClass();', correct:false},
        ]
     },
     {
        question: 'Which method can be used to find the highest value of x and y?',
        answers: [
            { text: 'Math.maximum(x,y)', correct:false},
            { text:'Math.maxNum(x,y)', correct:false},
            { text: 'Math.largest(x,y)', correct:false},
            { text: 'Math.max(x,y) ', correct:true},
        ]
     },
     {
        question: 'Which keyword is used to import a package from the Java API library?',
        answers: [
            { text: 'lib', correct:false},
            { text: 'import ', correct:true},
            { text: 'package', correct:false},
            { text: 'getlib', correct:false},
        ]
     },
     {
        question: 'How do you start writing an if statement in Java?',
        answers: [
            { text:'if x > y then:', correct:false},
            { text: 'if x > y:', correct:false},
            { text: 'if (x > y) ', correct:true},
        ]
     },
     {
        question: 'Which statement is used to stop a loop?',
        answers: [
            { text: 'break ', correct:true},
            { text: 'stop', correct:false},
            { text: 'return', correct:false},
            { text: 'exit', correct:false},
        ]
     }        
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz()
{
    currentQuestionIndex = 0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
} 

function showQuestion()
{
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " +currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);

    });
}

function resetState()
{
    nextButton.style.display = "none";
    while(answerButtons.firstChild)
    {
        answerButtons.removeChild(answerButtons.firstChild)
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML =`You scored ${score} out of ${questions.length} !`;
    nextButton.innerHTML = " Play Again ";
    nextButton.style.display = "block"
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

startQuiz();

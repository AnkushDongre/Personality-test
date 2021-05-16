const questionList = [
    "Have to keep solving problems.", //1
    "Help others.", //2
    "Can get a raise.", //3
    "Look forward to changes in your job.", //4
    "Have freedom in your area.", //5
    "Gain prestige in your field.", //6
    "Need to have artistic ability.", //7
    "Are one of the gang.", //8
    "Know your job will last.", //9
    "Can be the kind of person you would like to be.", //10
    "Have a boss who gives you a fair deal.", //11
    "Like the setting in which your work is done.", //12
    "Get the feeling of having done a good day’s work.", //13
    "Have the authority over others.", //14
    "Try out new ideas and suggestions.", //5
    "Create something new.", //16
    "Know by the results when you’ve done a good job.", //17
    "Have a boss who is reasonable.", //18
    "Are sure of always having a job.", //19
    "Add beauty to the world", //20
    "Make your own decisions", //21
    "Have pay increases that keep up with the cost of living", //22
    "Are mentally challenged", //23
    "Use leadership abilities", //24
    "Have adequate lounge, toilet and other facilities", //25
    "Have a way of life, while not on the job, that you like", //26
    "Form friendships with your fellow employees", //27
    "Know that others consider your work important", //28
    "Do not do the same thing all the time", //29
    "Feel you have helped another person", //30
    "Add to the well-being of other people", //31
    "Do many different things", //32
    "Are looked up to by others", //33
    "Have good connections with fellow workers", //34
    "Lead the kind of life you most enjoy", //35
    "Have a good place in which to work (quiet, calm, etc.)", //36
    "Plan and organize the work of others", //37
    "Need to be mentally alert", //38
    "Are paid enough to live very well", //39
    "Are your own boss", //40
    "Make attractive products", //41
    "Are sure of another job in the company if your present job ends", //42
    "Have a supervisor who is considerate", //43
    "See the result of your efforts", //44
    "Contribute new ideas", //45
];
var answerList = [];

var tempAnswer;
//question number
var questionNumber = 0;

const answerListLength = questionList.length;
//sections values for diplay
const instructionSection = document.getElementById("instruction-section")
const testSection= document.getElementById("test-section")
const resultSection = document.getElementById("result-section")
//question number sections

const questionNumberSection = document.getElementById("question-number");
const testQuestionSection = document.getElementById("question");

//buttons
const nextQuestion = document.getElementById("next-question-btn");


const final = document.getElementById("show-result-btn");

function goToTestSec(){
    instructionSection.style.display ="none";
    testSection.style.display = "block";
    nextQuestion.disabled = true;
    questionNumberSection.innerHTML ="Q "+ (questionNumber+1) +") ";
    testQuestionSection.innerText = questionList[questionNumber];
}

function answerOneFun() {
    tempAnswer = 1;
    nextQuestion.disabled = false;
}

function answerTwoFun() {
    tempAnswer = 2;
    nextQuestion.disabled = false;
}

function answerThreeFun() {
    tempAnswer = 3;
    nextQuestion.disabled = false;
}

function answerFourFun() {
    tempAnswer = 4;
    nextQuestion.disabled = false;
}

function answerFiveFun() {
    tempAnswer = 5;
    nextQuestion.disabled = false;
}

function submitAnswer() {

    if ((questionNumber+1) < answerListLength) {
        questionNumber++;
        nextQuestion.disabled = true;
        answerList[questionNumber-1] = tempAnswer;
        testQuestionSection.innerText = questionList[questionNumber];
        questionNumberSection.innerText = ("Q"+ (questionNumber+1) +")");
        console.log("Answerlist Values "+ answerList)

    } else {
        nextQuestion.style.display = "none";
        final.style.display= "block";
        
    }

}
// SCORES

const creativeVal= document.getElementById("creativity-score");
const achiveVal= document.getElementById("achive-score");
const manageVal= document.getElementById("management-score");
const surVal= document.getElementById("surroundings-score");
const supVal= document.getElementById("supervisory-relationships-score");
const wayVal= document.getElementById("way-of-life-score");
const securityVal= document.getElementById("security-score");
const associatesVal= document.getElementById("associates-score");
const aestheticVal= document.getElementById("aesthetic-score");
const prestigeVal= document.getElementById("prestige-score");
const independenceVal= document.getElementById("independence-score");
const varietyVal= document.getElementById("variety-score");
const altrusimVal= document.getElementById("altrusim-return-score");
const economicVal= document.getElementById("economic-return-score");
const intellectualVal= document.getElementById("intellectual-stimulation-return-score");

function creativity(){
    const creativityScore = answerList[14]+answerList[15]+answerList[44];
    creativeVal.innerText = creativityScore;
}
function achive(){
    const achiveScore = answerList[13]+answerList[23]+answerList[36];
    achiveVal.innerText = achiveScore;
}
function management(){
    const manageScore = answerList[12]+answerList[16]+answerList[43];
    manageVal.innerText = manageScore;
}
function surroundings(){
    const surScore = answerList[11]+answerList[24]+answerList[35];
    surVal.innerText = surScore;
}
function supervisory(){
    const supScore = answerList[10]+answerList[17]+answerList[42];
    supVal.innerText = supScore;
}
function way(){
    const wayScore = answerList[9]+answerList[25]+answerList[34];
    wayVal.innerText = wayScore;
}
function security(){
    const securityScore = answerList[8]+answerList[18]+answerList[41];
    securityVal.innerText = securityScore;
}
function associates(){
    const associatesScore = answerList[7]+answerList[26]+answerList[33];
    associatesVal.innerText = associatesScore;
}
function aesthetic(){
    const aestheticScore = answerList[6]+answerList[19]+answerList[40];
    aestheticVal.innerText = aestheticScore;
}
function prestige(){
    const prestigeScore = answerList[5]+answerList[27]+answerList[32];
    
    prestigeVal.innerText = prestigeScore;
}
function independence(){
    const independenceScore = answerList[4]+answerList[20]+answerList[39];
    independenceVal.innerText = independenceScore;
}
function variety(){
    const varietyScore = answerList[3]+answerList[28]+answerList[31];
    varietyVal.innerText = varietyScore;
}
function altrusim(){
    const altrusimScore = answerList[2]+answerList[21]+answerList[38];
    altrusimVal.innerText = altrusimScore;
}function economic(){
    const economicScore = answerList[1]+answerList[29]+answerList[30];
    economicVal.innerText = economicScore;
}function intellectual(){
    const intellectualScore = answerList[0]+answerList[22]+answerList[37];  
    intellectualVal.innerText = intellectualScore;
}

function showResult(){

    answerList[questionNumber] = tempAnswer;
    console.log("Answerlist Values "+ answerList)
    creativity();
    achive();
    management();
    surroundings();
    supervisory();
    way();
    security();
    associates();
    aesthetic();
    prestige();
    independence();
    variety();
    altrusim();
    economic();
    intellectual();
    resultSection.style.display = "block";
    testSection.style.display = "none";
}

const body = document.querySelector('body')

const scoreDiv = document.createElement("div")
const scoreElem = document.createElement("h2")

body.prepend(scoreDiv)
scoreDiv.prepend(scoreElem)
scoreDiv.style.position = 'fixed'


let currentQuestion = 0
let score = 0


const sections = document.querySelectorAll('section');

scoreElem.innerText = `Score: ${score}`

const correctAnswers = [
    'paris',  
    'jupiter',
    'japan',  
    'leonardo',
    'au'
];

// adds questions one by one in an object and values are points for each question
const quests = {}

let q = document.querySelectorAll("p")
q.forEach((k, ind) => {
    for(let i=0; i<=ind; i++){
        let kitxva = k.innerText
        let qula = 1;
        quests[kitxva] = qula;
    }
})


function checkAnswer(){
    const current = document.querySelectorAll("input[type='radio']:checked")
    const kitxva = document.querySelectorAll('p')
    let jami = 0

    current.forEach((element, index) => {
        // index of the checked element
        let parent = element.parentElement
        let answerIndex = parent.id-1

        let skull = kitxva[index].innerText
        // value of the checked element
        let currentValues = element.value
        let currentID = element.id

        // label to change color if right or wrong
        const label = document.querySelector(`label[for='${currentID}']`);

        if(currentValues === correctAnswers[answerIndex]){
            console.log(correctAnswers[answerIndex])
            label.classList.add("correct")
            // console.log(quests[skull])
            jami += quests[skull]
            console.log(jami)
        }else{
            label.classList.add("wrong")
        }
    });
    scoreElem.innerText = `Score: ${jami}`;
}


const check = document.getElementById('check-btn')
check.addEventListener("click", checkAnswer)
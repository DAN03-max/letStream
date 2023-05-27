const inputForm = document.getElementById("e-mail");

const plusBtn1 = document.querySelector(".fa-plus1");
const answer1 = document.querySelector(".answer1");

const plusBtn2 = document.querySelector(".fa-plus2");
const answer2 = document.querySelector(".answer2");

const plusBtn3 = document.querySelector(".fa-plus3");
const answer3 = document.querySelector(".answer3");

const plusBtn4 = document.querySelector(".fa-plus4");
const answer4 = document.querySelector(".answer4");

const plusBtn5 = document.querySelector(".fa-plus5");
const answer5 = document.querySelector(".answer5");


plusBtn1.addEventListener("click", function(){
    answer1.classList.toggle("show-answer")
})
plusBtn2.addEventListener("click", function(){
    answer2.classList.toggle("show-answer")
})
plusBtn3.addEventListener("click", function(){
    answer3.classList.toggle("show-answer")
})
plusBtn4.addEventListener("click", function(){
    answer4.classList.toggle("show-answer")
})
plusBtn5.addEventListener("click", function(){
    answer5.classList.toggle("show-answer")
})

inputForm.addEventListener("click", function(){
    this.innerHTML = " "
})
console.log(inputForm.nodeValue)
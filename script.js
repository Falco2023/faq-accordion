
const btnPlusMinus = document.querySelectorAll('.icon');;
const answers = document.querySelectorAll('.answer');
const question = document.querySelectorAll('.question-box');
const faq = document.querySelector('.faq');
for (let i = 0; i < btnPlusMinus.length; i++) {
    btnPlusMinus[i].addEventListener('click', function () {
        btnPlusMinus[i].classList.toggle('minus')
        btnPlusMinus[i].classList.toggle('plus')
        answers[i].classList.toggle('hidden')
        question[i].classList.toggle('text-box')
        question[i].classList.toggle('enlarge');


    })
}
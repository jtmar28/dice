const btn = document.querySelector('.dice__trigger');
const dice = document.querySelector('.dice__img');

function getRandomNumber(){
    return Math.floor(Math.random() * 6) + 1;
}

btn.addEventListener('click', function(){
    let randomNumber = getRandomNumber();
    dice.src = `img/dice${randomNumber}.png`;
});

// btn.addEventListener('click', function(){
//     let randomNumber = Math.floor(Math.random() * 6) + 1;
//     if(randomNumber === 1){
//         dice.innerHTML = `<img src="img/dice${randomNumber}.png" alt="">`;
//     }else if(randomNumber === 2){
//         dice.innerHTML = `<img src="img/dice${randomNumber}.png" alt="">`;
//     }else if(randomNumber === 3){
//         dice.innerHTML = `<img src="img/dice${randomNumber}.png" alt="">`;
//     }else if(randomNumber === 4){
//         dice.innerHTML = `<img src="img/dice${randomNumber}.png" alt="">`;
//     }else if(randomNumber === 5){
//         dice.innerHTML = `<img src="img/dice${randomNumber}.png" alt="">`;
//     }else{
//         dice.innerHTML = `<img src="img/dice${randomNumber}.png" alt="">`;
//     }
// });
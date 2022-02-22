document.addEventListener('click', main);

const randomNumberBetween = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function main(){
    const heading = document.querySelector('h1')
    const image1 = document.querySelector('.img1')
    const image2 = document.querySelector('.img2')

    const imgSrc = num => `images/dice${num}.png`

    var randomNumber1 = randomNumberBetween(1,6)
    var randomNumber2 = randomNumberBetween(1,6)

    image1.setAttribute("src", imgSrc(randomNumber1));
    image2.setAttribute("src", imgSrc(randomNumber2));

    if(randomNumber1 > randomNumber2){
        heading.textContent = "Player 1 Wins";
    }
    else if(randomNumber1 < randomNumber2){
        heading.textContent = "Player 2 Wins";
    }
    else if(randomNumber1 === randomNumber2){
        heading.textContent = "Match Draw";
    }
}

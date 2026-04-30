document.getElementById("easybtn").addEventListener("click", Easy);
document.getElementById("mediumbtn").addEventListener("click", Medium);
document.getElementById("hardbtn").addEventListener("click", Hard);
document.getElementById("Close").addEventListener("click", Close);

let Score = 0;
function updatescore() {
    Score++;
    document.getElementById("score").innerHTML = "Score: " + Score;
}

let time = 0;
function Timer() {
    time++;
    document.getElementById("Time").innerHTML = "Time: " + time + " ";
}

let moves = 0;
function updateMoves() {
    moves++;
    document.getElementById("moves").innerHTML = "Moves: " + moves;
}

function resetGame() {
    Score = 0;
    moves = 0;
    time = 0;
    flippedCard = [];
    lockboard = false;

    document.getElementById("score").innerHTML = "Score: 0";
    document.getElementById("moves").innerHTML = "Moves: 0";
    document.getElementById("Time").innerHTML = "Time: 0";

    document.querySelectorAll(".card").forEach(card => {
    card.classList.remove("flip");
    card.style.visibility = "visible";
});
}

const hud = document.querySelector(".hud");

let TotalPairs = 0;

let flippedCard = [];
let lockboard = false;



function handleCardClick(e) {

    const card = e.currentTarget;
    if (lockboard) return;
        if(card.classList.contains("flip"))
            return;

        card.classList.add("flip");
        flippedCard.push(card);

        if(flippedCard.length===2) {
            lockboard = true;

            const [card1, card2] = flippedCard;

            if (card1.dataset.id == card2.dataset.id) {

                if(Score === TotalPairs - 1) {
                   setTimeout(endgame, 1500);
                }

                updatescore();
                updateMoves();
                flippedCard = [];
                lockboard = false;
                setTimeout(() => {
                    card1.style.visibility = 'hidden';
                    card2.style.visibility = 'hidden';
                }, 1000);
            }
            else {
                updateMoves();
                setTimeout(() => {
                    card1.classList.remove("flip");
                    card2.classList.remove("flip");
                    flippedCard = [];
                    lockboard = false;
                }, 1000);
            }
        }
    }

    document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", handleCardClick);
});

    let timerInterval;

function Easy() {
    resetGame();
    clearInterval(timerInterval);
    timerInterval = setInterval(Timer, 1000);

    document.querySelector(".game_1").style.display = "grid";
    document.querySelector(".game_2").style.display = "none";
    document.querySelector(".game_3").style.display = "none";
    document.getElementById("Start").style.display = "none";
    hud.style.display = "flex";

const images = [
    {id: '1', src: "public/2H.png"},
    {id: '1', src: "public/2D.png"},
    {id: '2', src: "public/3C.png"},
    {id: '2', src: "public/3S.png"},
    {id: '3', src: "public/3H.png"},
    {id: '3', src: "public/3D.png"},
    {id: '4', src: "public/4H.png"},
    {id: '4', src: "public/4D.png"},
    {id: '5', src: "public/4C.png"},
    {id: '5', src: "public/4S.png"},
    {id: '6', src: "public/5H.png"},
    {id: '6', src: "public/5D.png"},
    {id: '7', src: "public/6C.png"},
    {id: '7', src: "public/6S.png"},
    {id: '8', src: "public/7H.png"},
    {id: '8', src: "public/7D.jpg"}
];

TotalPairs = images.length / 2;

const double = [...images];

const shuffle = double.sort(() =>
    Math.random() - 0.5
);

const contain = document.querySelectorAll(".game_1 .card");


contain.forEach((box, index) => {
    const back = box.querySelector(".back");
    back.style.backgroundImage = 'url(' + shuffle[index].src + ')';

    box.dataset.id = shuffle[index].id;
});
}


function Medium() {
    resetGame();
    clearInterval(timerInterval);
    timerInterval = setInterval(Timer, 1000);

    document.querySelector(".game_1").style.display = "none";
    document.querySelector(".game_2").style.display = "grid";
    document.querySelector(".game_3").style.display = "none";
    document.getElementById("Start").style.display = "none";
    hud.style.display = "flex";

const images = [
    {id: '1', src: "public/2H.png"},
    {id: '1', src: "public/2D.png"},
    {id: '2', src: "public/3C.png"},
    {id: '2', src: "public/3S.png"},
    {id: '3', src: "public/3H.png"},
    {id: '3', src: "public/3D.png"},
    {id: '4', src: "public/4H.png"},
    {id: '4', src: "public/4D.png"},
    {id: '5', src: "public/4C.png"},
    {id: '5', src: "public/4S.png"},
    {id: '6', src: "public/5H.png"},
    {id: '6', src: "public/5D.png"},
    {id: '7', src: "public/6C.png"},
    {id: '7', src: "public/6S.png"},
    {id: '8', src: "public/7H.png"},
    {id: '8', src: "public/7D.jpg"},
    {id: '9', src: "public/8H.jpg"},
    {id: '9', src: "public/8D.jpg"},
    {id: '10', src: "public/9C.png"},
    {id: '10', src: "public/9S.png"},
    {id: '11', src: "public/10D.png"},
    {id: '11', src: "public/10H.png"},
    {id: '12', src: "public/QH.png"},
    {id: '12', src: "public/QD.png"}
];

TotalPairs = images.length / 2;

const double = [...images];

const shuffle = double.sort(() =>
    Math.random() - 0.5
);

const contain = document.querySelectorAll(".game_2 .card");


contain.forEach((box, index) => {
    const back = box.querySelector(".back");
    back.style.backgroundImage = 'url(' + shuffle[index].src + ')';

    box.dataset.id = shuffle[index].id;
});

}




function Hard() {
    resetGame();
    clearInterval(timerInterval);
    timerInterval = setInterval(Timer, 1000);

    document.querySelector(".game_1").style.display = "none";
    document.querySelector(".game_2").style.display = "none";
    document.querySelector(".game_3").style.display = "grid";
    document.getElementById("Start").style.display = "none";
    hud.style.display = "flex";

const images = [
    {id: '1', src: "public/2H.png"},
    {id: '1', src: "public/2D.png"},
    {id: '2', src: "public/3C.png"},
    {id: '2', src: "public/3S.png"},
    {id: '3', src: "public/3H.png"},
    {id: '3', src: "public/3D.png"},
    {id: '4', src: "public/4H.png"},
    {id: '4', src: "public/4D.png"},
    {id: '5', src: "public/4C.png"},
    {id: '5', src: "public/4S.png"},
    {id: '6', src: "public/5H.png"},
    {id: '6', src: "public/5D.png"},
    {id: '7', src: "public/6C.png"},
    {id: '7', src: "public/6S.png"},
    {id: '8', src: "public/7H.png"},
    {id: '8', src: "public/7D.jpg"},
    {id: '9', src: "public/8H.jpg"},
    {id: '9', src: "public/8D.jpg"},
    {id: '10', src: "public/9C.png"},
    {id: '10', src: "public/9S.png"},
    {id: '11', src: "public/10D.png"},
    {id: '11', src: "public/10H.png"},
    {id: '12', src: "public/QH.png"},
    {id: '12', src: "public/QD.png"},
    {id: '13', src: "public/KC.png"},
    {id: '13', src: "public/KS.png"},
    {id: '14', src: "public/KD.png"},
    {id: '14', src: "public/KH.jpg"},
    {id: '15', src: "public/AH.jpg"},
    {id: '15', src: "public/AD.jpg"},
    {id: '16', src: "public/AC.jpg"},
    {id: '16', src: "public/AS.png"}
];

TotalPairs = images.length / 2;

const double = [...images];

const shuffle = double.sort(() =>
    Math.random() - 0.5
);

const contain = document.querySelectorAll(".game_3 .card");


contain.forEach((box, index) => {
    const back = box.querySelector(".back");
    back.style.backgroundImage = 'url(' + shuffle[index].src + ')';

    box.dataset.id = shuffle[index].id;
});

}



const overlay = document.getElementById("overlay");


function endgame() {
    document.getElementById("end").style.display = "block";
    document.getElementById("finalTime").innerHTML = time;
    document.getElementById("finalMoves").innerHTML = moves;
    clearInterval(timerInterval);
    overlay.style.display = "block";
}

function Close() {
    location.reload();
    document.getElementById("end").style.display = "none";
}
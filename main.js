let Score = 0;
function updatescore() {
    Score++;
    document.getElementById("score").innerHTML = "Score: " + Score;
}

let time = 0;
function Timer() {
    time++;
    document.getElementById("Time").innerHTML = "Time: " + time + "";
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


let TotalPairs = 0;

let flippedCard = [];
let lockboard = false;



function handleCardClick(e) {

    const card = e.currentTarget;
    if (lockboard) return;
        if(card.classList.contains("flip"))return;

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

    let timerInterval;

function Easy() {
    resetGame();
    clearInterval(timerInterval);
    timerInterval = setInterval(Timer, 1000);

    document.querySelector(".game_1").style.display = "grid";
    document.querySelector(".game_2").style.display = "none";
    document.querySelector(".game_3").style.display = "none";
    document.getElementById("Start").style.display = "none";
    document.getElementsByClassName("Extra")[0].style.display = "block";

document.querySelectorAll(".game_1 .card").forEach(card => {
    card.onclick = handleCardClick;
});


const images = [
    {id: '1', src: "/2H.png"},
    {id: '1', src: "/2D.png"},
    {id: '2', src: "/5H.png"},
    {id: '2', src: "/5D.png"},
    {id: '3', src: "/8H.jpg"},
    {id: '3', src: "/8D.png"},
    {id: '4', src: "/9C.png"},
    {id: '4', src: "/9S.png"},
    {id: '5', src: "/AC.jpg"},
    {id: '5', src: "/AS.png"},
    {id: '6', src: "/AD.jpg"},
    {id: '6', src: "/AH.jpg"},
    {id: '7', src: "/QH.png"},
    {id: '7', src: "/QD.png"}
];

TotalPairs = images.length;

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
    document.getElementsByClassName("Extra")[0].style.display = "block";
    document.querySelectorAll(".game_2 .card").forEach(card => {
    card.onclick = handleCardClick;
});


const images = [
    {id: '1', src: "/2H.jpg"},
    {id: '1', src: "/2D.png"},
    {id: '2', src: "/5H.jpg"},
    {id: '2', src: "/5D.png"},
    {id: '3', src: "/8H.jpg"},
    {id: '3', src: "/8D.png"},
    {id: '4', src: "/9C.jpg"},
    {id: '4', src: "/9S.png"},
    {id: '5', src: "/AC.jpg"},
    {id: '5', src: "/AS.png"},
    {id: '6', src: "/AD.jpg"},
    {id: '6', src: "/AH.jpg"},
    {id: '7', src: "/QH.png"},
    {id: '7', src: "/QD.png"},
    {id: '8', src: "/KC.png"},
    {id: '8', src: "/KS.png"},
    {id: '9', src: "/KD.png"},
    {id: '9', src: "/KH.jpg"},
    {id: '10', src: "/AH.jpg"},
    {id: '10', src: "/AS.png"}
];

TotalPairs = images.length;

const double = [...images, ...images];

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
    document.getElementsByClassName("Extra")[0].style.display = "grid";
    document.querySelectorAll(".game_3 .card").forEach(card => {
    card.onclick = handleCardClick;
});


const images = [
    {id: '1', src: "/2H.jpg"},
    {id: '1', src: "/2D.png"},
    {id: '2', src: "/5H.jpg"},
    {id: '2', src: "/5D.png"},
    {id: '3', src: "/8H.jpg"},
    {id: '3', src: "/8D.png"},
    {id: '4', src: "/9C.jpg"},
    {id: '4', src: "/9S.png"},
    {id: '5', src: "/AC.jpg"},
    {id: '5', src: "/AS.png"},
    {id: '6', src: "/AD.jpg"},
    {id: '6', src: "/AH.jpg"},
    {id: '7', src: "/QH.png"},
    {id: '7', src: "/QD.png"},
    {id: '8', src: "/KC.png"},
    {id: '8', src: "/KS.png"},
    {id: '9', src: "/KD.png"},
    {id: '9', src: "/KH.jpg"},
    {id: '10', src: "/AH.jpg"},
    {id: '10', src: "/AS.png"},
    {id: '11', src: "/3C.png"},
    {id: '11', src: "/3S.png"},
    {id: '12', src: "/3H.png"},
    {id: '12', src: "/3D.png"},
    {id: '13', src: "/4H.png"},
    {id: '13', src: "/4D.png"},
    {id: '14', src: "/4C.png"},
    {id: '14', src: "/4S.png"}
    ];

TotalPairs = images.length;

const double = [...images, ...images];

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






function endgame() {
    document.getElementById("end").style.display = "block";
    document.getElementById("finalTime").innerHTML = time;
    document.getElementById("finalMoves").innerHTML = moves;
    clearInterval(timerInterval);
}

function Close() {
    location.reload();
    document.getElementById("end").style.display = "none";
}

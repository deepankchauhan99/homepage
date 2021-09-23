for (let i = 0; i < 3; i++)
{
    document.querySelectorAll(".card")[i].addEventListener("mouseover", function (e){
        document.querySelectorAll(".card")[i].classList.add("hover-color");
    });

    document.querySelectorAll(".card")[i].addEventListener("mouseout", function (e){
        document.querySelectorAll(".card")[i].classList.remove("hover-color");
    });
}

function dice() {
    location.href = "https://deepankchauhan99.github.io/diceGame/";
}

function drum() {
    location.href = "https://deepankchauhan99.github.io/drums/";
}

function tindog() {
    location.href = "https://deepankchauhan99.github.io/tindog/";
}
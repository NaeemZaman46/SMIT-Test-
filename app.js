let time = new Date();


let res1 = time.getHours();
let res2 = time.getMinutes();
let res3 = time.getSeconds();

document.querySelector(".displaytime").textContent = res1;
document.querySelector(".displaytime2").textContent = res2;
document.querySelector(".displaytime3").textContent = res3;

let xy = document.querySelector(".cordinates")

document.onclick = (e) => {
    let xcor = document.querySelector(".x").textContent = e.x + "px";
    let ycor = document.querySelector(".y").textContent = e.y + "px";

    let time = new Date();


let res1 = time.getHours();
let res2 = time.getMinutes();
let res3 = time.getSeconds();

document.querySelector(".displaytime").textContent = res1;
document.querySelector(".displaytime2").textContent = res2;
document.querySelector(".displaytime3").textContent = res3;
}


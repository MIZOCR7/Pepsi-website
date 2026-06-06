let mainImage = document.getElementById('pepsi-image');
let background = document.getElementById('home');
let blackCan = document.getElementById('black-can');
let whiteCan = document.getElementById('white-can');

function changeToBlue() {
    mainImage.style.transform = "scale(1.2)";
    blackCan.style.transform = "scale(1)";
    whiteCan.style.transform = "scale(1)";
    
    background.style.background = '#0162be';
    background.style.color = '#fff';
}

function changeToBlack() {
    mainImage.style.transform = "scale(1)";
    blackCan.style.transform = "scale(1.2)";
    whiteCan.style.transform = "scale(1)";
    
    background.style.background = '#1e1e1e';
    background.style.color = '#fff';
}

function changeToWhite() {
    mainImage.style.transform = "scale(1)";
    blackCan.style.transform = "scale(1)";
    whiteCan.style.transform = "scale(1.2)";
    
    background.style.background = '#e0e0e0';
    background.style.color = '#000';
}

mainImage.onclick = changeToBlue;
blackCan.onclick = changeToBlack;
whiteCan.onclick = changeToWhite;

window.onload = changeToBlue;

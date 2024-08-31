let bubble = document.querySelectorAll("div");
const animation = document.getElementById("animation");

function newChar() {
    const alphabat = "abcdefghijklmnopqrstuvwxyz";
    const alpha = Math.floor(Math.random()*26)
    return alphabat.charAt(alpha)
}

function randomPosition() {
    const top = Math.floor(Math.random() * 8.7) * 10
    const left = Math.floor(Math.random() * 9.7) * 10

    return {top, left}
}

function createNewElement(){
    const char = newChar()
    const div = document.createElement("div");
    div.setAttribute("class", "bubble");

    let {top, left} = randomPosition();

    for(let i = 0; i < bubble.length; i++){
        if(bubble[i].style.top === `${top}%` && bubble[i].style.left === `${left}%`){
            console.log(bubble[i].style.top, bubble[i].style.left);
            top = randomPosition().top;
            left = randomPosition().left;
        }
    }

    div.style.top = `${top}%`;
    div.style.left = `${left}%`;
    div.dataset.key = char;
    div.innerText = char;

    animation.appendChild(div)
    bubble = document.querySelectorAll(".bubble")
}

document.addEventListener("keyup", (event) =>{
    for(let i = 0; i < bubble.length; i++){
        const elemkey = bubble[i].dataset.key
        if (elemkey === event.key.toUpperCase()) {
            console.log("matched")
            bubble[i].remove();
            break;
        }
    }
    createNewElement();
})
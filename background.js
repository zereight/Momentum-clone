
const body_control = document.querySelector("body");

function body_init(){
    const randomNum = Math.floor(Math.random()*11) + 1;
    const img_contorl=document.createElement("img");
    img_contorl.src = `images/${randomNum}.jpg`;
    img_contorl.classList.add("bg");
    body_control.appendChild(img_contorl);

}

body_init();
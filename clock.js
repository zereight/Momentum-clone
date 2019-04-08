
const clock_control = document.querySelector(".js-clock");

function get_clock(){
    const time = new Date();
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    clock_control.innerText = `${hours > 9 ? hours : "0"+hours}:${minutes > 9 ? minutes : "0"+minutes}:${seconds > 9 ? seconds : "0"+seconds}`;
}

function init_clock() {
    
    get_clock();
    setInterval(get_clock, 1000);

}

init_clock ();
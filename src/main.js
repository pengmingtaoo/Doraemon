import string from './style.js';

let n = 1;
textApp.innerText = string.substr(0, n);
htmlApp.innerHTML = string.substr(0, n);

let time = 100;

const run = () => {
  n += 1;
  if (n > string.length) {
    window.clearInterval(id);
    return;
  }
  textApp.innerText = string.substr(0, n);
  htmlApp.innerHTML = string.substr(0, n);
  textApp.scrollTop = textApp.scrollHeight;
}
const play = ()=>{
 return setInterval(run, time);
}
const pause = ()=>{
  window.clearInterval(id);
}

let id = play();
buttonPause.onclick = () => {
    pause();
  }
  buttonPlay.onclick = () => {
     id = play();
  }
  buttonSlow.onclick = () =>{
    pause();
    time = 300;
     id = play();
  }
  buttonNormal.onclick = () =>{
    pause();
    time = 100;
    id = play();
  }
  buttonFast.onclick = () =>{
    pause();
    time = 0;
    id = play();
  }
  
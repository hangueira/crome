// click title 
const title = document.querySelector('#title');
const CLICK_CLASS = 'clicked';

// title이 click 되었을때 
function handleClick() {
  // classList : toggle : class에 값이 있으면 remove 없으면 add
  title.classList.toggle(CLICK_CLASS);
}


function init() {
  // title이 click 되는 이벤트
  title.addEventListener("click", handleClick);  
}

// start js
init();
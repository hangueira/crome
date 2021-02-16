const form = document.querySelector('.form');
const input = form.querySelector('input');
const login = document.querySelector('.login');
const logout = document.querySelector('#title');

const USER_LC = 'currentUser';
const SHOWING_CN = 'showing';

// 로그인시 처리
function paintLogin(user) {
  form.classList.remove(SHOWING_CN);
  login.classList.add(SHOWING_CN);
  login.innerText = `Hello ${user}`;
}

// localStorage 에 저장
function saveID(user) {
  localStorage.setItem(USER_LC, user);
}

// 로그인 엔터처리
function handleSubmit(event) {
  // preventDefalut input no change
  event.preventDefault();
  const currentValue = input.value;
  paintLogin(currentValue);
  saveID(currentValue);
}

// 로그인 처리
function askForName(){
  form.classList.add(SHOWING_CN);
  form.addEventListener('submit', handleSubmit);
}

// ID 있는지 확인후 처리
function loadName() {
  console.log(localStorage.getItem(USER_LC));
  const currentUser = localStorage.getItem(USER_LC);
  if (currentUser === null) {
    // 로그인 처리
    askForName();
  } else {
    // 로그인 상태 유지
    paintLogin(currentUser);
  }
}

// 로그아웃 처리
function handleLogout(){
  localStorage.removeItem(USER_LC);
  login.classList.remove(SHOWING_CN);
  alert(`로그아웃 되었습니다`);
  init();
}

function init(){
  loadName();
  logout.addEventListener('click', handleLogout);
}

init(); 


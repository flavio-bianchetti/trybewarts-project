const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const btn = document.getElementById('buttonLogin');
const submitBtn = document.getElementById('submit-btn');
const agreement = document.getElementById('agreement');

function testeBtn() {
  if (input1.value === 'tryber@teste.com' && input2.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

function btnLogin() {
  btn.addEventListener('click', testeBtn);
}

function checkBoxStatus() {
  if (agreement.checked) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
}

function inputCheckBox() {
  agreement.addEventListener('click', checkBoxStatus);
}

window.onload = function pageOnload() {
  btnLogin();
  inputCheckBox();
};

const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const btn = document.getElementById('buttonLogin');
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

window.onload = function pageOnload() {
  btnLogin();
};

// const submitBtn = document.getElementById('submit-btn');
// const agreement = document.getElementById('agreement');

// function checkBoxStatus() {
//   if (agreement.checked) {
//     submitBtn.enabled = true;
//   } else {
//     submitBtn.enabled = false;
//   }
// }

// function inputCheckBox() {
// agreement.addEventListener('click', checkBoxStatus);
// }

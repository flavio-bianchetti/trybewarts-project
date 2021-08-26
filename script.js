const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const btn = document.getElementById('buttonLogin');
const submitBtn = document.getElementById('submit-btn');
const agreement = document.getElementById('agreement');
const myTextArea = document.getElementById('textarea');
const numCaracteres = document.getElementById('num-caracteres');
// const nome = document.getElementById('input-name');
// const sobrenome = document.getElementById('input-lastname');
// const email = document.getElementById('input-email');
// const casa = document.getElementById('house');
// const familia = document.querySelectorAll('[name=family]');
// const materias = document.getElementsByClassName('subject');
// const avaliacao = document.querySelectorAll('[name=rate]'); // paramos aqui.
// const observacoes = document.getElementById('textarea');

// let info = {
//   nome: '',
//   sobrenome: '',
//   email: '',
//   casa: '',
//   familia: '',
//   materias: '',
//   avaliacao: '',
//   observacoes: '',
// };

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

function countMyTextArea(event) {
  numCaracteres.innerHTML = event.target.value.length;
  numCaracteres.innerHTML += ' / 500';
}

function memoMyTextArea() {
  myTextArea.addEventListener('keydown', countMyTextArea);
}

// function submitForm() {

// }

// function btnSubmit() {
//   submitBtn.addEventListener('click', submitForm);
// }

window.onload = function pageOnload() {
  btnLogin();
  inputCheckBox();
  memoMyTextArea();
  // btnSubmit();
};

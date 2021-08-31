const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const btn = document.getElementById('buttonLogin');
const submitBtn = document.getElementById('submit-btn');
const agreement = document.getElementById('agreement');
const myTextArea = document.getElementById('textarea');
const numCaracteres = document.getElementById('counter');
const nome = document.getElementById('input-name');
const sobrenome = document.getElementById('input-lastname');
const email = document.getElementById('input-email');
const casa = document.getElementById('house');
const familia = document.querySelectorAll('[name="family"]');
const materias = document.getElementsByClassName('subject');
const avaliacao = document.querySelectorAll('[name="rate"]');
const observacoes = document.getElementById('textarea');
const myform = document.getElementById('evaluation-form');
const auxiliary = ['evaluation-form', 'span', 'br'];

const info = {
  nome: '',
  sobrenome: '',
  email: '',
  casa: '',
  familia: '',
  materias: '',
  avaliacao: '',
  observacoes: '',
};

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

function countMyTextArea() {
  numCaracteres.innerHTML = (500 - myTextArea.value.length);
}

function memoMyTextArea() {
  myTextArea.addEventListener('keyup', countMyTextArea);
}

function getIndexFamily() {
  for (let index = 0; index < 3; index += 1) {
    if (familia[index].checked) {
      return index;
    }
  }
  return -1;
}

function listSubjects() {
  let subjects = '';
  for (let index = 0; index < materias.length; index += 1) {
    if (materias[index].checked) {
      subjects += materias[index].value;
      subjects += ', ';
    }
  }
  if (subjects.length > 3) {
    subjects = subjects.substring(0, subjects.length - 2);
  }
  return subjects;
}

function getGrade() {
  for (let index = 0; index < avaliacao.length; index += 1) {
    if (avaliacao[index].checked) {
      return index;
    }
  }
  return -1;
}

function createElement(parent, tag, text) {
  const myNewElement = document.createElement(tag);
  if (text !== '') {
    myNewElement.innerText = text;
  }
  parent.appendChild(myNewElement);
}

function listResults1() {
  createElement(myform, auxiliary[1], 'Nome: ');
  createElement(myform, auxiliary[1], info.nome);
  createElement(myform, auxiliary[1], ' ');
  createElement(myform, auxiliary[1], info.sobrenome);
  createElement(myform, auxiliary[2], '');
  createElement(myform, auxiliary[1], 'Email: ');
  createElement(myform, auxiliary[1], info.email);
  createElement(myform, auxiliary[2], '');
  createElement(myform, auxiliary[1], 'Casa: ');
  createElement(myform, auxiliary[1], info.casa);
  createElement(myform, auxiliary[2], '');
}

function listResults2() {
  createElement(myform, auxiliary[1], 'Família: ');
  createElement(myform, auxiliary[1], info.familia);
  createElement(myform, auxiliary[2], '');
  createElement(myform, auxiliary[1], 'Matérias: ');
  createElement(myform, auxiliary[1], info.materias);
  createElement(myform, auxiliary[2], '');
  createElement(myform, auxiliary[1], 'Avaliação: ');
  createElement(myform, auxiliary[1], info.avaliacao);
  createElement(myform, auxiliary[2], '');
  createElement(myform, auxiliary[1], 'Observações: ');
  createElement(myform, auxiliary[1], info.observacoes);
  createElement(myform, auxiliary[2], '');
}

function submitForm() {
  info.nome = nome.value;
  info.sobrenome = sobrenome.value;
  info.email = email.value;
  info.casa = casa[casa.selectedIndex].value;
  info.familia = familia[getIndexFamily()].value;
  info.materias = listSubjects();
  info.avaliacao = avaliacao[getGrade()].value;
  info.observacoes = observacoes.value;
  myform.innerHTML = '';
  listResults1();
  listResults2();
  myform.style.display = 'inline-block';
}

function btnSubmit() {
  submitBtn.addEventListener('click', submitForm);
}

window.onload = function pageOnload() {
  btnLogin();
  inputCheckBox();
  memoMyTextArea();
  btnSubmit();
};

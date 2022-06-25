// Syntax .addEventListener
// document.addEventListener("click",aumentar)
// function aumentar(){
//     document.getElementById("currentNumber").innerHTML = 30;
//   };

const btnDecrement = document.getElementById("subtrair");
const btnIncrement = document.getElementById("adicionar");
const spnValue = document.getElementById("currentNumber");
spnValue.textContent = 0;

btnDecrement.addEventListener("click", decrement);
btnIncrement.addEventListener("click", increment);

function decrement() {
  spnValue.textContent = parseInt(spnValue.textContent) - 1;
  if (parseInt(spnValue.textContent) == 0) {
    btnDecrement.setAttribute("disabled", "");
  }
  if (parseInt(spnValue.textContent) < 10) {
    btnIncrement.removeAttribute("disabled");
  }
}

function increment() {
  spnValue.textContent = parseInt(spnValue.textContent) + 1;
  if (parseInt(spnValue.textContent) > 0) {
    btnDecrement.removeAttribute("disabled");
  }
  if (parseInt(spnValue.textContent) == 10) {
    btnIncrement.setAttribute("disabled", "");
  }
}

// const currentNumber = document.getElementsByName('currentNumber');
//   addEventListener('click', function(){
//         alert("esta correto")
//   })

// // Programa desenvolvido na aula
// var currentNumberWrapper = document.getElementById('currentNumber')
// var currentNumber = 0;

// function increment(){
//     currentNumber = currentNumber + 1;
//     currentNumberWrapper.innerHTML = currentNumber;
// }

// function decrement(){
//     currentNumber = currentNumber - 1;
//     currentNumberWrapper.innerHTML = currentNumber;
// }

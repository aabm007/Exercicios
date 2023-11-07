const FORM = document.querySelector('form');

FORM.addEventListener('submit', (e) => {
  e.preventDefault();
  calcular();
});

function calcular() {
  
  const NUMERO1 = Number(document.querySelector('#numero1').value);
  const NUMERO2 = Number(document.querySelector('#numero2').value);
  const OPERADOR = document.querySelector('#operador').value;
  const RESULTADO = document.querySelector('#resultado');
  let resultado, erro = 0, resto;
  
  switch(OPERADOR) {
    case '+':
      resultado = NUMERO1 + NUMERO2;
      break;
    case '-':
      resultado = NUMERO1 - NUMERO2;
      break;
    case '*':
      resultado = NUMERO1 * NUMERO2;
      break;
    case '/':
      if (NUMERO2 !== 0) {
        resultado = NUMERO1 / NUMERO2;
        resto = NUMERO1 % NUMERO2;
        break;
      } else {
        erro = -1;
        break;
      }
    case '**':
      resultado = NUMERO1 ** NUMERO2;
      break;
    default:
      erro = 1;
      break;
  }

  if(erro !== 1 && erro !== -1) {
    if((OPERADOR === "/") && (resto !== 0)){
      RESULTADO.innerHTML = `O resultado da operação foi ${Math.floor(resultado)} e tem resto ${resto}.`;
    } else {
      RESULTADO.innerHTML = `O resultado da operação foi ${resultado}.`;
    }
  } else if (erro === -1) {
    RESULTADO.innerHTML = `Digite o segundo número diferente de zero para a divisão.`;
  } else {
    RESULTADO.innerHTML = `A operação digitada é inválida, digite uma das opções dadas.`;
  }
  
}
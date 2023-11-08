function calcular() {
  
    const NUMERO1 = Number(document.querySelector('#numero1').value);
    const NUMERO2 = Number(document.querySelector('#numero2').value);
    const OPERADOR = document.querySelector('#operador').value;
    const RESULTADO = document.querySelector('#resultado');
    let resultado, erro = 0;
  
    console.log(subtracao);
    switch(OPERADOR) {
      case '+':
        resultado = somar(NUMERO1, NUMERO2);
        break;
      case '-':
        resultado = subtracao(NUMERO1, NUMERO2);
        break;
      default:
        erro = 1;
        break;
    }
  
    if(erro !== 1) {
      RESULTADO.innerHTML = `O resultado da operação foi ${resultado}.`;
    } else {
      RESULTADO.innerHTML = `A operação digitada é inválida, digite uma das opções dadas.`;
    }
  }
  
  function somar(num1, num2) {
    return num1 + num2;
  }
  
  let subtracao = (NUMERO1, NUMERO2) => NUMERO1 - NUMERO2;
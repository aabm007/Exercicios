try {
  let numero1 = prompt("Informe o primeiro número:");
  let numero2 = prompt("Informe o segundo número:");
  let numero3 = prompt("Informe o terceiro número:");

  numero1 = parseFloat(numero1);
  numero2 = parseFloat(numero2);
  numero3 = parseFloat(numero3);

  if (isNaN(numero1) || isNaN(numero2) || isNaN(numero3)) {

    throw new Error("Você deve informar três números válidos.");
    
  }

  const soma = numero1 + numero2 + numero3;

  console.log("A soma dos números é:", soma);
} catch (erro) {

  console.error("Ocorreu um erro:", erro.message);
} finally {

  console.log("Bloco finally: Este bloco é executado sempre.");
}
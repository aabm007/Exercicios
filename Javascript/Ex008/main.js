try {
    let numero = prompt("Informe um número:");
  
    let numeroConvertido = Number(numero);
  
    if (isNaN(numeroConvertido)) {
      throw new Error("Você não informou um número válido.");
    }
  
    console.log("Número informado:", numeroConvertido);
  } catch (erro) {
    console.error("Ocorreu um erro:", erro.message);
  } finally {
    console.log("Bloco finally: Este bloco é executado sempre.");
  }
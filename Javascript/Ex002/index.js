let nota1, nota2, nota3, media;

nota1 = Number(prompt('Digite a primeira nota do Aluno:'));
nota2 = Number(prompt('Digite a segunda nota do Aluno:'));
nota3 = Number(prompt('Digite a terceira nota do Aluno:'));

media = (nota1 + nota2 + nota3) / 3;

console.log(`A primeira nota do Aluno: ${nota1} segunda nota ${nota2} terceira nota ${nota3}`);
console.log(`A média do aluno foi ${media}`);
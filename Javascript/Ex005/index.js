const banco = {
    conta: "123456",
    saldo: 10000,
    tipoDeConta: "corrente",
    agencia: "7890",

    buscarSaldo: function() {
        return this.saldo;
    },

    deposito: function(valor) {
        this.saldo += valor;
        return `Depósito de ${valor} realizado. Novo saldo: ${this.saldo}`;
    },

    saque: function(valor) {
        if (valor > this.saldo) {
            return "Saldo insuficiente para saque.";
        } else {
            this.saldo -= valor;
            return `Saque de ${valor} realizado. Novo saldo: ${this.saldo}`;
        }
    },

    numeroDaConta: function() {
        return `O número da conta é ${this.conta}`;
    }
};


console.log(banco.buscarSaldo()); 
console.log(banco.deposito(4000)); 
console.log(banco.saque(2750)); 
console.log(banco.numeroDaConta()); 
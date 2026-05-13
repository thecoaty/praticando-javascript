export class Conta{
    #saldo;
    #cliente;
    #agencia;
    
    constructor(cliente, agencia, saldoInicial){
        if(this.constructor == Conta){
            throw new Error("Você não deveria instanciar um objeto do tipo Conta diretamente.")
        }
        this.#saldo = saldoInicial;
        this.#cliente = cliente;
        this.#agencia = agencia;
    }

    sacar(valor) {
        throw new Error("O método Sacar da conta é abstrato")
    }

    _sacar(valor, taxa){
        const valorSacado = taxa * valor;
        if(valorSacado <= this.#saldo){
            this.#saldo -= valorSacado;
            return valorSacado;
        }

        return 0;
    }

    depositar(valor){
        if(valor > 0){
            this.#saldo += valor;
        }
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}
export class CuentaAhorro{
    //debemos de crear los atributos de la clase
    #cliente;
    #saldo; //con el # es un atributo privado

    constructor(cliente,numero,agencia,saldo){
        this.numero = numero;
        this.agencia = agencia;
        this.#cliente = cliente;
        this.#saldo = saldo;
    }
    //estos dos son atributos publicos
    depositoEnCuenta(valor){
        if (valor > 0)
            this.#saldo+=valor;
        return this.#saldo;
    }
}
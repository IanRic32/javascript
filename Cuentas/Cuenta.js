export class Cuenta{
    #cliente;
    #saldo;

    constructor(cliente, numero, agencia,saldo) {
        if(this.contructor == Cuenta){
            throw new Error("No se debe instancias objetos de la clase cuenta")
        }
        this.#cliente = cliente;
        this.numero = numero;
        this.agencia = agencia;
        this.#saldo = saldo;
    }

    depositoEnCuenta(valor) {
        if (valor > 0)
            this.#saldo += valor;
        return this.#saldo;
    }
 
    retirarDeCuenta(valor) {
        //Este es un metodo abstracto
        throw new Error("Debe implementar el metodo de la clase");
        //this._retirarDeCuenta(valor,0)
    }

    _retirarDeCuenta(valor,comision) {
        varlor = valor *(1+comision/100);
        if (valor <= this.#saldo)
            this.#saldo -= valor;
        return this.#saldo;
    }

    verSaldo() {
        return this.#saldo;
    }

    transferirParaCuenta(valor,cuentaDestino) {
        this.retirarDeCuenta(valor);
        cuentaDestino.depositoEnCuenta(valor);
        valor = 200;
        valor = valor*1000;
    }
}
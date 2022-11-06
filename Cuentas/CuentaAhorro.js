import { Cuenta } from "./Cuenta";
export class CuentaAhorro extends Cuenta{
    //debemos de crear los atributos de la clase
    constructor(cliente, numero, agencia,saldo) {
        super(cliente,numero,agencia,saldo);
    
    }
    retirarDeCuenta(valor) {
        super._retirarDeCuenta(valor,2);
    }
}
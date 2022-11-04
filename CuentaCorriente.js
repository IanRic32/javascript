import { Cliente } from "./Cliente.js";

export class CuentaCorriente extends Cuenta {
    static cantidadCuentas = 0;

    constructor(cliente, numero, agencia) {
        CuentaCorriente.cantidadCuentas++;
    }
}
/*Importación de clases*/
import {Cliente} from './Cliente.js'
import {CuentaCorriente} from './CuentaCorriente.js';
import { CuentaAhorro } from './CuentaAhorro.js';
import { Cuenta } from './Cuenta.js';
const cliente = new Cliente('Leonardo','13804050','123224');
const cliente2 = new Cliente('María','16979808','8989');

const cuentaDeLeonardo = new CuentaCorriente('Corriente',cliente, '1', '001',0);
const cuentaDeMaria = new CuentaCorriente('Corriente',cliente2,'2','002',0);
const cuentaAhorroLeonardo = new CuentaAhorro('Ahorro',cliente,'9985','001',0);

console.log(cuentaDeLeonardo);
console.log(cuentaAhorroLeonardo);
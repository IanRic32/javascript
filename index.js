/*Importación de clases*/
import {Cliente} from './Cliente.js';
import {CuentaCorriente} from './Cuentas/CuentaCorriente.js';
import { CuentaAhorro } from './Cuentas/CuentaAhorro.js';
import { Cuenta } from './Cuentas/Cuenta.js';
import { CuentaNomina } from './Cuentas/CuentaNomina.js';
import { Empleado } from './Empleados/Empleado.js';
import { Gerente } from './Empleados/Gerente.js';
import { Director } from './Empleados/Director.js';
const cliente = new Cliente('Leonardo','13804050','123224');
const cliente2 = new Cliente('María','16979808','8989');
/*
const cuentaDeLeonardo = new CuentaCorriente(cliente, '1', '001');
const cuentaDeMaria = new CuentaCorriente(cliente2,'2','002');
const cuentaAhorroLeonardo = new CuentaAhorro(cliente,'9985','001',0);

const cuentaSimple= new Cuenta(cliente,'098','001',100);
*/
const empleado= new Empleado('Ian Velazquez','123456');
const gerente= new Gerente('Ian Velazquez','678910');
const director= new Director('Carlos Perez','654321');
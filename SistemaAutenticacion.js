export class SistemaAutenticacion {
    static login (usuario,clave){
        if ("autenticable" in usuario && usuario.autenticable instanceof Function ){
            return usuario.autenticable(clave);
            //instanceof es para ver si es funcion de la clase
        }
        else    
            return false;
    }
}
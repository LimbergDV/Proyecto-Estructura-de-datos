import { Empleado } from './components/clases.js';

// Logica del Programa
const administrador = new Empleado('Administrador','admin1');
const trabajador = new Empleado('Trabajador', 'trabaja1');

function obtenerDOM(id) {
    let valor = document.getElementById(id).value;
    return valor;
}

//Login
let btnEntrar = document.getElementById('button');

btnEntrar.addEventListener('click', function() {
    let usuario = obtenerDOM('usuario');
    let password = obtenerDOM('password');

    //Validar las credenciales de acceso
    let accesoAdmin = administrador.accederSistema(usuario,password);
    let accesoTrabaja = trabajador.accederSistema(usuario,password);
    
    if (accesoAdmin) {
        //Acceso correcto para el admin
        window.location = "/public/admin.html";
    } else if (accesoTrabaja) {
        //Si no es admin, acceso correcto para el trabajador
        window.location = "/public/trabajador.html";
    } 
});



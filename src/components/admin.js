import { ListaEnlazada } from './listaEnlazada.js';
import { Servicio } from './clases.js';

// Logica para el administrador

const listaServicios = new ListaEnlazada();

//Cargar servicios
const servicio0 = new Servicio('Cambio de aceite', 750);
listaServicios.insertarUltimo(servicio0);
const servicio1 = new Servicio('Revisión y ajuste del sistema de frenos', 1500);
listaServicios.insertarUltimo(servicio1);
const servicio2 = new Servicio('Rotación de neumaticos', 300);
listaServicios.insertarUltimo(servicio2);
const servicio3 = new Servicio('Alineación y balanceo', 600);
listaServicios.insertarUltimo(servicio3);
const servicio4 = new Servicio('Mantenimiento del sistema de enfriamiento', 1000);
listaServicios.insertarUltimo(servicio4);
const servicio5 = new Servicio('Cambio de correas', 500);
listaServicios.insertarUltimo(servicio5);
const servicio6 = new Servicio('Mantenimiento del sistema de indiección de combustible', 1000);
listaServicios.insertarUltimo(servicio6);
const servicio7 = new Servicio('Cambio de baterías', 200);
listaServicios.insertarUltimo(servicio7);
const servicio8 = new Servicio('Mantenimiento del sistema de suspencion', 1100);
listaServicios.insertarUltimo(servicio8);
const servicio9 = new Servicio('Remplazo de fluidos', 500);
listaServicios.insertarUltimo(servicio9);

function obtenerDOM(id) {
  let valor = document.getElementById(id).value;
  return valor;
}

//Mostrar la tabla de servicios
let tablaServicios = document.getElementById('tablaServicios');
let cuerpoTablaServicios = document.createElement('tbody');

  for (let i = 0; i < listaServicios.tamano; i++) {
    let fila = document.createElement('tr');
    let servicio = listaServicios.obtenerEn(i);

    let columnaNombre = document.createElement('td');
    columnaNombre.innerText = servicio.nombre;
    fila.appendChild(columnaNombre);

    let columnaCosto = document.createElement('td');
    columnaCosto.innerText = servicio.costo;
    fila.appendChild(columnaCosto);

    cuerpoTablaServicios.appendChild(fila);
  }

tablaServicios.appendChild(cuerpoTablaServicios);
console.log(listaServicios.obtenerEn(listaServicios.tamano-1).nombre);

//Opcion de cargar nuevo servicio 
let btnGuardar = document.getElementById('nuevoServicio');

btnGuardar.addEventListener('click', function () {
  //Hacer que aparesca estos campos
  let nombre = obtenerDOM('nombreServicio');
  let costo = parseFloat(obtenerDOM('costoServicio'));

  const servicio = new Servicio(nombre,costo);
  listaServicios.insertarUltimo(servicio);

  //Actualizar la tabla de servicios
  let fila = document.createElement('tr');
  let servicioL = listaServicios.obtenerEn(listaServicios.tamano-1);

  let columnaNombre = document.createElement('td');
  columnaNombre.innerText = servicioL.nombre;
  fila.appendChild(columnaNombre);

  let columnaCosto = document.createElement('td');
  columnaCosto.innerText = servicioL.costo;
  fila.appendChild(columnaCosto);
  cuerpoTablaServicios.appendChild(fila);
  tablaServicios.appendChild(cuerpoTablaServicios);
  console.log(listaServicios.obtenerEn(listaServicios.tamano-1).nombre);
  desactivarFomr1();
});

//Opcion editar servicios
let btnEditarS = document.getElementById('editarServicio');

btnEditarS.addEventListener('click', function () {
  //seleccionar un servicio
    //buscarlo en la lista 
    //editar sus propiedades
    let nombre = obtenerDOM('nombreServicio');
    let costo = parseFloat(obtenerDOM('costoServicio'));

    //listaServicios.Obteneren(indice).editarPropiedades(nombre,costo);

    //Actualizar la tabla de servicios

});

let btnEleminarS = document.getElementById('eleminarServicio');

let btnMoverArriba = document.getElementById('moverArriba');
let btnMoverAbajo = document.getElementById('moverAbajo');
let btnCancelarS = document.getElementById('cancelarServicio');
let btnCambiarHorario = document.getElementById('cambiarHorario');
let btnGuardarH = document.getElementById('guardar');


let btnVolver = document.getElementById('volver');

btnVolver.addEventListener('click', function () {
  window.location = "login.html";
  console.log(listaServicios.obtenerEn(listaServicios.tamano-1).nombre);
});

//Desactivar 
let input1 = document.getElementById('nombreServicio');
let input2 = document.getElementById('costoServicio');
let input3 = document.getElementById('horario');

function desactivarBtnTabla2() {
  btnMoverArriba.disabled = true;
  btnMoverAbajo.disabled = true;
  btnCancelarS.disabled = true;
  btnCambiarHorario.disabled = true;
}

function desactivarBtnTabla1() { 
  btnEditarS.disabled = true;
  btnEleminarS.disabled = true;
}

function desactivarFomr1() {
  input1.value = '';
  input2.value = '';
  btnGuardar.disabled = true; 
  input1.disabled = true;
  input2.disabled = true;
}

function desactivarFomr2() {
  input3.disabled = true;
  btnGuardarH.disabled = true;
}

desactivarFomr1();
desactivarFomr2();
desactivarBtnTabla1();
desactivarBtnTabla2();

let btnAgregarNuevo = document.getElementById('agregarNuevo');

btnAgregarNuevo.addEventListener('click', function (){
  input1.disabled = false;
  input2.disabled = false;
  btnGuardar.disabled = false;
});
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

let btnVolver = document.getElementById('volver');

btnVolver.addEventListener('click', function () {
  window.location = "login.html";
  console.log(listaServicios.obtenerEn(listaServicios.tamano-1).nombre);
});

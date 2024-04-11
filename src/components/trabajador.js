import { ListaEnlazada } from "./listaEnlazada.js";
import { Automovil } from "./clases.js";
import { Servicio } from "./clases.js";
import { Venta } from "./clases.js";


const listaVentas = new ListaEnlazada();

let idVenta = 1;
const campoIdVenta = document.getElementById('id_venta');

campoIdVenta.value = idVenta;

let btnEnviar = document.getElementById('enviar');

btnEnviar.addEventListener('click', function() {
  console.log("Botón presionado");
  //debes obtener las variables (del html)
  let marca = document.getElementById('marca').value;
  let modelo = document.getElementById('modelo').value;
  let placas = document.getElementById('placas').value;
  let horaEntrada = document.getElementById('hora_entrada').value;
  let descripcion = document.getElementById('descripcion').value;

  
  if(marca === '' || modelo === '' || placas === '' || horaEntrada === '' || descripcion === ''){
    alert ('Por favor complete los campos de informacion acerca del vehículo');
    return;
  } 

  let serviciosSeleccionados = [];

  if(document.getElementById('cambio_aceite').checked){
    serviciosSeleccionados.push('cambio_aceite');
  }
  if(document.getElementById('revision_frenos').checked){
    serviciosSeleccionados.push('revision_frenos');
  }
  if(document.getElementById('rotacion_neumaticos').checked){
    serviciosSeleccionados.push('rotacion_neumaticos');
  }
  if(document.getElementById('alineacion').checked){
    serviciosSeleccionados.push('alineacion');
  }
  if(document.getElementById('mantenimiento_sistema').checked){
    serviciosSeleccionados.push('mantenimiento_sistema');
  }
  if(document.getElementById('cambio_correas').checked){
    serviciosSeleccionados.push('cambio_correas');
  }
  if(document.getElementById('mantenimiento_indeccion').checked){
    serviciosSeleccionados.push('mantenimiento_indeccion');
  }
  if(document.getElementById('cambio_baterias').checked){
    serviciosSeleccionados.push('cambio_baterias');
  }
  if(document.getElementById('mantenimiento_suspencion').checked){
    serviciosSeleccionados.push('mantenimiento_suspencion');
  }
  if(document.getElementById('remplazo_fluidos').checked){
    serviciosSeleccionados.push('remplazo_fluidos');
  }
  

  let servicioExtra = document.getElementById('servicio_ext').value;
  let precioExtraInput = parseFloat(document.getElementById('precio_ext').value);
  let precioExtra = parseFloat(precioExtraInput);

  
  let checkboxes = document.querySelectorAll('input[type="checkbox"]');
  if (![...checkboxes].some(checkbox => checkbox.checked) && servicioExtra === '') {
    alert('Por favor seleccione al menos un servicio o complete el campo de servicio extra.');
    return; 
  }


  const auto = new Automovil (1 , marca, modelo, placas, descripcion);
  
  

  const servicio = new Servicio(servicioExtra, precioExtra);

  const venta = new Venta(auto, serviciosSeleccionados); //quite horario porque me decía que no estaba definido
  
  listaVentas.insertarUltimo(venta);
  
  /*console.log("Información de datos coche ");
  console.log("ID de venta: ", idVenta)
  console.log("Marca:", marca);
  console.log("Modelo: ", modelo);
  console.log("Placas: ", placas);
  console.log("Hora de entrada: ", horaEntrada);
  console.log("Descripción: ", descripcion);
  console.log("Servicios seleccionados: ", serviciosSeleccionados);
  console.log("Servicio Extra: ", servicioExtra);
  console.log("Precio Extra: ", precioExtra);  
*/
  campoIdVenta.value = idVenta++;
  
  //asignarlas a sus respectivas clases 
  //Alguanas iran el listaa (Los servicios que se haran) 
  //Para un servicio especial (Obtener las variables y añadirlo a la lista de servicios)
  //Cargar la clase venta 
  //Añadir la venta a una lista de ventas 

 // Guardar datos en localStorage
 localStorage.setItem('idVenta', idVenta);
 localStorage.setItem('marca', marca);
 localStorage.setItem('modelo', modelo);
 localStorage.setItem('placas', placas);
 localStorage.setItem('horaEntrada', horaEntrada);
 localStorage.setItem('descripcion', descripcion);
 localStorage.setItem('serviciosSeleccionados', JSON.stringify(serviciosSeleccionados));
 localStorage.setItem('servicioExtra', servicioExtra);
 localStorage.setItem('precioExtra', precioExtra);
 localStorage.setItem('listaVentas', JSON.stringify(listaVentas));
 
 //verificar si se estan guardando las ventas
 console.log(listaVentas.obtenerEn(0).automovil.marca);

  limpiarDatos();
});

// Convertir la lista serializada de nuevo a un objeto JavaScript
let listaVentas2 = JSON.parse(localStorage.getItem('listaVentas'));

console.log(listaVentas2.obtenerEn(0).automovil.marca);

function limpiarDatos(){
  document.getElementById('marca').value = '';
  document.getElementById('modelo').value = '';
  document.getElementById('placas').value = '';
  parseFloat(document.getElementById('hora_entrada').value = '' );
  document.getElementById('descripcion').value = '';
  document.getElementById('servicio_ext').value = '';
  parseFloat(document.getElementById('precio_ext').value = '' );

  document.getElementById('cambio_aceite').checked = false;
  document.getElementById('revision_frenos').checked = false;
  document.getElementById('rotacion_neumaticos').checked = false;
  document.getElementById('alineacion').checked = false;
  document.getElementById('mantenimiento_sistema').checked = false;
  document.getElementById('cambio_correas').checked = false;
  document.getElementById('mantenimiento_indeccion').checked = false;
  document.getElementById('cambio_baterias').checked = false;
  document.getElementById('mantenimiento_suspencion').checked = false;
  document.getElementById('remplazo_fluidos').checked = false;
  
}
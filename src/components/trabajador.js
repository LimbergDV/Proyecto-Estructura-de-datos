obtenerDatos();

function obtenerDatos() {
  let nombre = localStorage.getItem('servicioNuevo');
  let costo = localStorage.getItem('precioNuevo');

  if (!nombre == '' && !costo == 0) {
    let seccion = document.getElementById('nuevosServicios');

    let saltoLinea = document.createElement('br');
    let label = document.createElement('label');
    let input = document.createElement('input');
    input.type = 'checkBox';
    input.id = `${nombre}` 
    
    label.innerText = `${nombre} $${costo}`;
    seccion.appendChild(saltoLinea);
    seccion.appendChild(label);
    seccion.appendChild(input);
  }
}

function guardarDatos(marca, modelo, placas, horaEntrada, descripcion, serviciosSeleccionados) {
  localStorage.setItem('id', idVenta);
  localStorage.setItem('marca', marca);
  localStorage.setItem('modelo', modelo);
  localStorage.setItem('placas', placas);
  localStorage.setItem('horaEntrada', horaEntrada);
  localStorage.setItem('descripcion', descripcion);
  localStorage.setItem('serviciosSeleccionados', JSON.stringify(serviciosSeleccionados));
}
 
function elegirServicio() {
  let serviciosSeleccionados = [];
  if(document.getElementById('cambio_aceite').checked){
     serviciosSeleccionados.push(0);
    }
    if(document.getElementById('revision_frenos').checked){
      serviciosSeleccionados.push(1);
    }
    if(document.getElementById('rotacion_neumaticos').checked){
      serviciosSeleccionados.push(2);
    }
    if(document.getElementById('alineacion').checked){
      serviciosSeleccionados.push(3);
    }
    if(document.getElementById('mantenimiento_sistema').checked){
      serviciosSeleccionados.push(4);
    }
    if(document.getElementById('cambio_correas').checked){
      serviciosSeleccionados.push(5);
    }
    if(document.getElementById('mantenimiento_indeccion').checked){
      serviciosSeleccionados.push(6);
    }
    if(document.getElementById('cambio_baterias').checked){
      serviciosSeleccionados.push(7);
    }
    if(document.getElementById('mantenimiento_suspencion').checked){
      serviciosSeleccionados.push(8);
    }
    if(document.getElementById('remplazo_fluidos').checked){
      serviciosSeleccionados.push(9);
    } 
    return serviciosSeleccionados;
 }

let idVenta = 1;
const campoIdVenta = document.getElementById('id_venta');

campoIdVenta.value = idVenta;

let btnEnviar = document.getElementById('enviar');

btnEnviar.addEventListener('click', function() {
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

  let serviciosSeleccionados = elegirServicio();

  let servicioExtra = document.getElementById('servicio_ext').value;
  let precioExtra = parseFloat(document.getElementById('precio_ext').value);

  if (!(servicioExtra.value == '' && precioExtra == 0)){
    localStorage.setItem('servicioExtra', servicioExtra);
    localStorage.getItem('precioExtra', precioExtra);
  }

  let checkboxes = document.querySelectorAll('input[type="checkbox"]');
  if (![...checkboxes].some(checkbox => checkbox.checked) && servicioExtra === '') {
    alert('Por favor seleccione al menos un servicio o complete el campo de servicio extra.');
    return; 
  }

  guardarDatos(marca, modelo, placas, horaEntrada, descripcion, serviciosSeleccionados);

  limpiarDatos();
});



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
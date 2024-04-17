import  { Venta, Taller, Automovil } from './clases.js';

const main = new Taller();

if (!(localStorage.length === 0 && Object.keys(localStorage).length === 0)) {
  obtenerDatos();
}

function obtenerDatos() {
    let campoIdVenta = localStorage.getItem('id');
    let marca = localStorage.getItem('marca');
    let modelo = localStorage.getItem('modelo');
    let placas = localStorage.getItem('placas');
    let horaEntrada = localStorage.getItem('horaEntrada');
    let descripcion = localStorage.getItem('descripcion');
    let serviciosSeleccionados = JSON.parse(localStorage.getItem('serviciosSeleccionados'));

    const automovil = new Automovil(campoIdVenta, marca, modelo, placas, descripcion);
    const venta = new Venta(automovil, horaEntrada);

    let nombre = localStorage.getItem('servicioNuevo');
    let costo = localStorage.getItem('precioNuevo');

    if (!nombre == '' && !costo == 0) {
      venta.taller.cargarServicioExtra(nombre, costo);
    }

    venta.elegirSer(serviciosSeleccionados);
    main.addVenta(venta);
}

function mostrarServiciosExtra() {
    let nombre = localStorage.getItem('servicioNuevo');
    let costo = localStorage.getItem('precioNuevo');

    if (!nombre == '' && !costo == 0) {
    let fila = document.createElement('tr');
    let columnaNombreExtra = document.createElement('td');
    columnaNombreExtra.innerText = nombre;
    fila.appendChild(columnaNombreExtra);

    let columnaCostoExtra = document.createElement('td');
    columnaCostoExtra.innerText = costo;
    fila.appendChild(columnaCostoExtra);
    cuerpoTablaServicios.appendChild(fila);
    }
}
function obtenerDOM(id) {
  let valor = document.getElementById(id).value;
  return valor;
}

//Mostrar la tabla de servicios
  let tablaServicios = document.getElementById('tablaServicios');
  let cuerpoTablaServicios = document.createElement('tbody');

  for (let i = 0; i < main.listaServicios.tamano; i++) {
    let fila = document.createElement('tr');
    let servicio = main.listaServicios.obtenerEn(i);

    let columnaNombre = document.createElement('td');
    columnaNombre.innerText = servicio.nombre;
    fila.appendChild(columnaNombre);

    let columnaCosto = document.createElement('td');
    columnaCosto.innerText = servicio.costo;
    fila.appendChild(columnaCosto);

    cuerpoTablaServicios.appendChild(fila);
  }
  mostrarServiciosExtra();
tablaServicios.appendChild(cuerpoTablaServicios);

//Obtener todos los botones e inputs
let btnGuardar = document.getElementById('nuevoServicio');
let btnEditarS = document.getElementById('editarServicio');
let btnEleminarS = document.getElementById('eleminarServicio');
let btnCancelarS = document.getElementById('cancelarServicio');
let btnCambiarHorario = document.getElementById('cambiarHorario');
let btnGuardarH = document.getElementById('guardar');
let btnVolver = document.getElementById('volver');
let input1 = document.getElementById('nombreServicio');
let input2 = document.getElementById('costoServicio');
let input3 = document.getElementById('horario');
let btnAgregarNuevo = document.getElementById('agregarNuevo');

//Desactivar los campos necesarios
function desactivarBtnTabla2() {
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


//Opcion de agregar nuevo servicio 
btnAgregarNuevo.addEventListener('click', function (){
  input1.disabled = false;
  input2.disabled = false;
  btnGuardar.disabled = false;
  desactivarBtnTabla1();
});


btnGuardar.addEventListener('dblclick', function () {
  //Hacer que aparesca estos campos
  let nombre = obtenerDOM('nombreServicio');
  let costo = parseFloat(obtenerDOM('costoServicio'));

  localStorage.setItem('servicioNuevo', nombre);
  localStorage.setItem('precioNuevo', parseFloat(costo));
  main.cargarServicioExtra(nombre, costo);

  //Actualizar la tabla de servicios
  let fila = document.createElement('tr');
  let servicioL = main.listaServicios.obtenerEn(main.listaServicios.tamano-1);

  let columnaNombre = document.createElement('td');
  columnaNombre.innerText = servicioL.nombre;
  fila.appendChild(columnaNombre);

  let columnaCosto = document.createElement('td');
  columnaCosto.innerText = servicioL.costo;
  fila.appendChild(columnaCosto);

  cuerpoTablaServicios.appendChild(fila);
  tablaServicios.appendChild(cuerpoTablaServicios);
  desactivarFomr1();
  activarEditarServicios();
});


//Opcion editar servicios
function activarEditarServicios() {
  let filas = tablaServicios.getElementsByTagName('tr');

  for (let i = 1; i < filas.length; i++) {
    filas[i].addEventListener('click', function () {
      btnEditarS.disabled = false;
      btnEleminarS.disabled = false;

      btnEditarS.addEventListener('click', function () {     
        btnEleminarS.disabled = true;
        input1.disabled = false;
        input2.disabled = false;
        btnGuardar.disabled = false;
        let nombre = filas[i].cells[0].innerText;
        let costo = filas[i].cells[1].innerHTML;
        input1.value = nombre;
        input2.value = costo;
        
        let index;
        if (main.listaServicios.obtenerEn(i-1).nombre === nombre) {
          index = i-1;
        }

        btnGuardar.addEventListener('click', function () {
          nombre = obtenerDOM('nombreServicio');
          costo = parseFloat(obtenerDOM('costoServicio'));
          main.listaServicios.obtenerEn(index).modificarServicio(nombre, costo);
          filas[i].cells[0].innerText = input1.value;
          filas[i].cells[1].innerText = input2.value; 
          activarEditarServicios();       
          desactivarFomr1();
          desactivarBtnTabla1();
        });
      });
      
      btnEleminarS.addEventListener('click', function (){
        let nombre = filas[i].cells[0].innerText;
        if (main.listaServicios.obtenerEn(i-1).nombre == nombre) {
          main.listaServicios.removerEn(i-1);
          filas[i].cells[0].innerText = input1.value = '';
          filas[i].cells[1].innerText = input2.value = '';
          activarEditarServicios();
          desactivarBtnTabla1();
        } 
      });
    });
}
}

activarEditarServicios();

//Tabla2 servicios del dia

let tablaServiciosDia = document.getElementById('tablaDia');
document.addEventListener('DOMContentLoaded', function () {
  // Recuperar datos del trabajador desde LocalStorage
  for (let i = 0; i < main.listaVentas.tamano; i++) {
    let servicio = main.listaVentas.obtenerEn(i);

    for (let j = 0; j < servicio.seleccionados.tamano; j++) {   
    let nombreServicio = servicio.seleccionados.obtenerEn(j).nombre;
    let costo = servicio.seleccionados.obtenerEn(j).costo;
    let id = servicio.automovil.id;
    let horario = servicio.horario;
    // Mostrar los datos en la tabla de servicios del día
    
    let fila = document.createElement('tr');  
    let columnaNombreServicio = document.createElement('td');
    columnaNombreServicio.innerText = nombreServicio; // Puedes mostrar más información si lo deseas
    fila.appendChild(columnaNombreServicio);

    let columnaCostoTotal = document.createElement('td');
    columnaCostoTotal.innerText = costo; // Mostrar el costo total con dos decimales
    fila.appendChild(columnaCostoTotal);

    let columnaId = document.createElement('td');
    columnaId.innerText = id; // Mostrar el costo total con dos decimales
    fila.appendChild(columnaId);

    let columnaHorario = document.createElement('td');
    columnaHorario.innerText = horario; // Mostrar el costo total con dos decimales
    fila.appendChild(columnaHorario);

    tablaServiciosDia.appendChild(fila);
    }};

    //Botones tabla dos
    let filas = tablaServiciosDia.getElementsByTagName('tr');
    for (let i = 1; i < filas.length; i++) {
      filas[i].addEventListener('click', function () {
        btnCancelarS.disabled = false;
        btnCambiarHorario.disabled = false;

        btnCambiarHorario.addEventListener('click', function (){
          input3.disabled = false;
          btnGuardarH.disabled = false;

          btnGuardarH.addEventListener('click', function () {
            let horario = document.getElementById('horario').value;
            main.listaVentas.obtenerEn(i-1).modificarHorario(horario);
            
            filas[i].cells[3].innerText =  horario;
            desactivarFomr2();
            desactivarBtnTabla2();
          });
        });

        btnCancelarS.addEventListener('click', function (){
          let nombre = filas[i].cells[0].innerText;
          if (main.listaVentas.obtenerEn(i-1).seleccionados.obtenerEn(i-1).nombre == nombre) {
            main.listaVentas.obtenerEn(i-1).seleccionados.removerEn(i-1);
            filas[i].cells[0].innerText = '';
            filas[i].cells[1].innerText =  '';
            filas[i].cells[2].innerText =  '';
            filas[i].cells[3].innerText =  '';
            desactivarFomr2();
            desactivarBtnTabla2();
          } 
        });

      });
    }

});

btnVolver.addEventListener('click', function () {
  window.location = "login.html";
});


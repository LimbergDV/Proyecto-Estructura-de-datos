const listaVentas = new ListaEnlazada();

function enviar() {
  //debes obtener las variables (del html)
  let marca = document.getElementById('marca').value;
  let modelo = document.getElementById('modelo').value;
  let placas = document.getElementById('placas').value;
  let descripcion = document.getElementById('descripcion').value;

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
  let precioExttra = parseFloat(document.getElementById('precio_ext')).value;
  
  let Automovil = new Automovil (marca, modelo, placas, descripcion, serviciosSeleccionados, servicioExtra, precioExttra);
  
  listaVentas.insertarUltimo(venta);

  //asignarlas a sus respectivas clases 
  //Alguanas iran el listaa (Los servicios que se haran) 
  //Para un servicio especial (Obtener las variables y añadirlo a la lista de servicios)
  //Cargar la clase venta 
  //Añadir la venta a una lista de ventas 
}
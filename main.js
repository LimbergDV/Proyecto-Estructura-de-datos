//Lista enlazada

class Node {
    constructor(dato, siguiente = null) {
      this.dato = dato;
      this.siguiente = siguiente;
    }
}
  
  // crea/obtiene/remover nodos de la listas enlazasas
class ListaEnlazada {
    constructor() {
      this.head = null;
      this.tamano = 0;
    }
  
    // insertar el primer nodo
    insertarPrimero(dato) {
      this.head = new Node(dato, this.head);
      this.tamano++;
    }
  
    // insertar el ultimo nodo
    insertarUltimo(dato) {
      let node = new Node(dato);
      let actual;
  
      // si esta vacion hacerlo la cabecera
      if (!this.head) {
        this.head = node;
      } else {
        actual = this.head;
  
        while (actual.siguiente) {
          actual = actual.siguiente;
        }
  
        actual.siguiente = node;
      }
  
      this.tamano++;
    }
  
    // insertar un indice
    insertarEn(dato, indice) {
      //  si el indice esta fuera de rango
      if (indice > 0 && indice > this.tamano) {
        return;
      }
  
      // si es el primer indice
      if (indice === 0) {
        this.insertarPrimero(dato);
        return;
      }
  
      const node = new Node(dato);
      let actual, anterior;
  
      // hacer la cabeza el nodo actual
      actual = this.head;
      let contador = 0;
  
      while (contador < indice) {
        anterior = actual; // bid abntes de indice
        contador++;
        actual = actual.siguiente; // Nodo despues del indice
      }
  
      node.siguiente = actual;
      anterior.siguiente = node;
  
      this.tamano++;
    }
  
    // obtene run indice
    obtenerEn(indice) {
      let actual = this.head;
      let contador = 0;
  
      while (actual) {
        if (contador == indice) {
          //console.log(actual.dato);
          return actual.dato;
        }
        contador++;
        actual = actual.siguiente;
      }
  
      return null;
    }
  
    // remover el indice
    removerEn(indice) {
      if (indice > 0 && indice > this.tamano) {
        return;
      }
  
      let actual = this.head;
      let anterior;
      let contador = 0;
  
      // remover el primer
      if (indice === 0) {
        this.head = actual.siguiente;
      } else {
        while (contador < indice) {
          contador++;
          anterior = actual;
          actual = actual.siguiente;
        }
  
        anterior.siguiente = actual.siguiente;
      }
  
      this.tamano--;
    }
  
    // limpiar lista
    limpiarLista() {
      this.head = null;
      this.tamano = 0;
    }
  
    // imprmir los datos de la lista
    printListdato() {
      let actual = this.head;
  
      while (actual) {
        console.log(actual.dato);
        actual = actual.siguiente;
      }
    }
}


// Declara aquí las clases

class Automovil {
    constructor(id, marca, modelo, placas, descripcion) {
        this.id = id;
        this.marca = marca;
        this.modelo = modelo;
        this.placas =  placas;
        this.descripcion = descripcion;

    }

}

class Empleado {
    constructor(usuario, password) {
        this.usuario = usuario;
        this.password = password;
    }

    accederSistema(usuario, password) {
        this.bandera = false;

        if (usuario === this.usuario && password === this.password) {
            this.bandera = true;
        }
        return this.bandera;
    }
}

class Servicio {
    constructor(nombre, costo) {
        this.nombre = nombre;
        this.costo = costo;
    }

    editarPropiedades(nombre, costo) {
        this.nombre = nombre;
        this.costo = costo;
    }
}


// Logica del Programa

const administrador = new Empleado('Administrador','admin1');
const trabajador = new Empleado('Trabajador', 'trabaja1');

function obtenerDOM(id) {
    let valor = document.getElementById(id).value;
    return valor;
}

//Login
function entrar(){
    let usuario = obtenerDOM('usuario');
    let password = obtenerDOM('password');

    //Validar las credenciales de acceso
    let accesoAdmin = administrador.accederSistema(usuario,password);
    let accesoTrabaja = trabajador.accederSistema(usuario,password);
    
    if (accesoAdmin) {
        //Acceso correcto para el admin
        window.location = "admin.html";
    } else if (accesoTrabaja) {
        //Si no es admin, acceso correcto para el trabajador
        window.location = "trabajador.html";
    } 
}

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


//Opcion de cargar nuevo servicio 
function nuevoServicio() {
    //Hacer que aparesca estos campos
    let nombre = obtenerDOM('nombreServicio');
    let costo = parseFloat(obtenerDOM('costoServicio'));

    const servicio = new Servicio(nombre,costo);
    listaServicios.insertarUltimo(servicio);

    //Actualizar la tabla de servicios
}

//Opcion editar servicios
function editarServicio() {
    //seleccionar un servicio
    //buscarlo en la lista 
    //editar sus propiedades
    let nombre = obtenerDOM('nombreServicio');
    let costo = parseFloat(obtenerDOM('costoServicio'));

    //listaServicios.Obteneren(indice).editarPropiedades(nombre,costo);

    //Actualizar la tabla de servicios
}

function verServicios() {
    //mostrar tabla de servicios
}

function verServiciosContratados() {
    //sumar costos
  
}

var boton = document.getElementById("volver");
boton.disabled = true;

function volver() {
  window.location = "login.html";
}


import { ListaEnlazada } from "./listaEnlazada.js";

// Declara aquí las clases
export class Automovil {
    constructor(id, marca, modelo, placas, descripcion) {
        this.id = id;
        this.marca = marca;
        this.modelo = modelo;
        this.placas =  placas;
        this.descripcion = descripcion;
    }
}

export class Empleado {
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

export class Servicio {
    constructor(nombre, costo) {
        this.nombre = nombre;
        this.costo = costo;
    }

    modificarServicio(nombre, costo) {
        this.nombre = nombre;
        this.costo = costo;
    }
}

export class Taller {
    constructor() {
        this.listaServicios = new ListaEnlazada();
        this.cargarServicios();
        this.listaVentas = new ListaEnlazada();
    }

    addVenta(venta) {
      this.listaVentas.insertarUltimo(venta);
    }

    cargarServicios() {
        let servicio0 = new Servicio('Cambio de aceite', 750);
        this.listaServicios.insertarUltimo(servicio0);
        let servicio1 = new Servicio('Revisión y ajuste del sistema de frenos', 1500);
        this.listaServicios.insertarUltimo(servicio1);
        let servicio2 = new Servicio('Rotación de neumaticos', 300);
        this.listaServicios.insertarUltimo(servicio2);
        let servicio3 = new Servicio('Alineación y balanceo', 600);
        this.listaServicios.insertarUltimo(servicio3);
        let servicio4 = new Servicio('Mantenimiento del sistema de enfriamiento', 1000);
        this.listaServicios.insertarUltimo(servicio4);
        let servicio5 = new Servicio('Cambio de correas', 500);
        this.listaServicios.insertarUltimo(servicio5);
        let servicio6 = new Servicio('Mantenimiento del sistema de indiección de combustible', 1000);
        this.listaServicios.insertarUltimo(servicio6);
        let servicio7 = new Servicio('Cambio de baterías', 200);
        this.listaServicios.insertarUltimo(servicio7);
        let servicio8 = new Servicio('Mantenimiento del sistema de suspencion', 1100);
        this.listaServicios.insertarUltimo(servicio8);
        let servicio9 = new Servicio('Remplazo de fluidos', 500);
        this.listaServicios.insertarUltimo(servicio9);
    }
    cargarServicioExtra(nombre, costo) {
        let servicioExtra = new Servicio(nombre, parseFloat(costo));
        this.listaServicios.insertarUltimo(servicioExtra);
    }
}

export class Venta {
  constructor(automovil, horario) {
    this.taller = new Taller();
    this.automovil = automovil;
    this.horario = horario;
    this.serviciosSeleccionados = [];
    this.total;
    this.seleccionados = new ListaEnlazada();
  }

   elegirSer(serviciosSeleccionados) { //Checar logica

      for (let i = 0; i < serviciosSeleccionados.length; i++) {
        for (let j = 0; j < this.taller.listaServicios.tamano; j++) {
          if (serviciosSeleccionados[i] == j) {
            this.seleccionados.insertarUltimo(this.taller.listaServicios.obtenerEn(j));
          }
        }
      }
   }

  modificarHorario(horario) {
    this.horario = horario;
  }
  
  calcularTotal() {
    for (let i = 0; i < this.serviciosSeleccionados.tamano; i++) {
        let servicio = this.serviciosSeleccionados.obtenerEn(i);
        this.total += servicio.costo;
    } 
    return this.total;
  }

}
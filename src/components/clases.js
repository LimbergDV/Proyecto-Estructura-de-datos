import { ListaEnlazada } from "./listaEnlazada";

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
    }

    cargarServicios() {}
    cargarServicioExtra(nombre, costo) {}
    elegirServicio() {}
}

export class Venta {
  constructor(automovil, servicio, horario) {
    this.listaServicio = new ListaEnlazada();
    this.automovil = automovil;
    this.servicio = servicio;
    this.horario = horario;
  }

  modificarHorario() {}
  calcularTotal() {}
  
}

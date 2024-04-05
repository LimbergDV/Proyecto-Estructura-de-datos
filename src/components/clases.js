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

    editarPropiedades(nombre, costo) {
        this.nombre = nombre;
        this.costo = costo;
    }
}

export class Venta {
  constructor(automovil, listaServiciosPH, descripcion, horario) {
   this.automovil = automovil;
   this.listaServiciosPH = listaServiciosPH;
   this.descripcion = descripcion;
   this.horario = horario;
  }
}

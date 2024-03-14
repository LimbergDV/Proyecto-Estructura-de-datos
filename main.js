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
        bandera = false;

        if (usuario === this.usuario && password === this.password) {
            bandera = true;
        }
        return bandera;
    }
}

class Servicio {
    constructor(nombre, costo) {
        this.nombre = nombre;
        this.costo = costo;
    }
}

// Logica del Programa
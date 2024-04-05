//Lista enlazada
class Node {
    constructor(dato, siguiente = null) {
      this.dato = dato;
      this.siguiente = siguiente;
    }
}
  
  // crea/obtiene/remover nodos de la listas enlazasas
 export class ListaEnlazada {
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
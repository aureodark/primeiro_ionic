import { Injectable } from '@angular/core';
import { Cliente } from './cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  clientes: Cliente[];
  constructor() { 
    this.clientes = [];
  }

  addCliente(cliente: Cliente) {
    this.clientes.push(cliente);
  }
  getClientes() {
    return this.clientes;
  }
}

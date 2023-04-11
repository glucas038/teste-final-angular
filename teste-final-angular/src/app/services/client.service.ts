import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { IClient } from '../interfaces/client';


@Injectable({
  providedIn: 'root'
})
export class ClientService {
  endpoint = 'clientes';
  api= environment.api;

  constructor(private http: HttpClient) {}

  retornarTodosClientes(){
    return this.http.get<IClient[]>(`${this.api}/${this.endpoint}`);
  }

  retornarCliente(cpf: string){
    return this.http.get<IClient>(`${this.api}/${this.endpoint}/${cpf}`);
  }

  cadastrarCliente(cliente: IClient){
    return this.http.post(`${this.api}/${this.endpoint}`, cliente);
  }

  editarCliente(cliente: IClient){
    return this.http.put(`${this.api}/${this.endpoint}/${cliente.cpf}`, cliente);
  }

  deletarCliente(cliente: IClient){
    return this.http.delete(`${this.api}/${this.endpoint}/${cliente.cpf}`);
  }

}

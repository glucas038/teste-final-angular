import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IClient } from 'src/app/interfaces/client';
import { ClientService } from 'src/app/services/client.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-client',
  templateUrl: './view-client.component.html',
  styleUrls: ['./view-client.component.css']
})
export class ViewClientComponent {
  clienteForm = new FormGroup({
    nome: new FormControl('', Validators.required),
    cpf: new FormControl('', Validators.required),
    telefone: new FormControl('', Validators.required),
    endereco: new FormGroup({
      rua: new FormControl('', Validators.required),
      numero: new FormControl(0,Validators.required),
      cep: new FormControl('', Validators.required),
    }),
    rendimentoMensal: new FormControl(0, Validators.required)
  })

  clientes: IClient[] = [];
  constructor(private clientService: ClientService, private route: ActivatedRoute){}

  ngOnInit(){
    console.log("Teste");
    this.clientService.retornarTodosClientes().subscribe((result: IClient[]) => {
      this.clientes = result;
    });
  }


  deletar(cpf: string){
    console.log(cpf);
    this.clientService.retornarCliente(cpf).subscribe((cliente: IClient) =>{
      this.clientService.deletarCliente(cliente).subscribe(result => {
        Swal.fire({
          title: 'CPF deletado',
          icon: 'success',
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'Ok'
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.href="http://localhost:4200/clientes";
          }
        })
      }, error => {
        Swal.fire({
          icon: 'error',
          title: 'Erro ao remover',
          text: 'Confira as informações',
        })
      });
    })
  }

}

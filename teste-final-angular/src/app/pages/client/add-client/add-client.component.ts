import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IClient } from 'src/app/interfaces/client';
import { ClientService } from 'src/app/services/client.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent {

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

  constructor(private clientService: ClientService, private route: ActivatedRoute){}

  ngOnInit(){
  }

  cadastrar(){
    const cliente: IClient = this.clienteForm.value as unknown as IClient;

    this.clientService.retornarCliente(cliente.cpf).subscribe((cliente: IClient) =>{
      console.log(cliente.cpf);
    })

    this.clientService.cadastrarCliente(cliente).subscribe(result => {
      Swal.fire({
        title: 'Cadastrado com sucesso',
        icon: 'success',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Ok'
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href="http://localhost:4200/clientes/cadastrar"
        }
      })
    }, error => {
      Swal.fire({
        icon: 'error',
        title: 'Erro ao cadastrar',
        text: 'CPF já cadastrado',
      })
    });
  }
}

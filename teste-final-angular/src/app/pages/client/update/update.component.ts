import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IClient } from 'src/app/interfaces/client';
import { ClientService } from 'src/app/services/client.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {

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
    const cpf = String(this.route.snapshot.paramMap.get('cpf'));

    if(cpf){
      this.clientService.retornarCliente(cpf).subscribe((cliente: IClient) => {
        this.clienteForm.setValue({
          nome: cliente.nome,
          telefone: cliente.telefone,
          rendimentoMensal: cliente.rendimentoMensal,
          endereco: {
            rua: cliente.endereco.rua,
            numero: cliente.endereco.numero,
            cep: cliente.endereco.cep,
          },
          cpf: cliente.cpf,
        });
      });
    }
  }

  editar(){
    const cliente: IClient = this.clienteForm.value as unknown as IClient;
    this.clientService.editarCliente(cliente).subscribe(result => {
      Swal.fire({
        title: 'Alteração concluída',
        icon: 'success',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Ok'
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href="http://localhost:4200/clientes"
        }
      })
    }, error => {
      Swal.fire({
        icon: 'error',
        title: 'Erro ao alterar',
        text: 'Confira as informações',
      })
    });
  }
}

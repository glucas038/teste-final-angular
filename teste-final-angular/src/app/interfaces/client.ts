export interface IClient {
  cpf: string;
  nome: string;
  telefone: string;
  endereco: {
    rua: string;
    numero: number;
    cep: string;
  };
  rendimentoMensal: number;
}

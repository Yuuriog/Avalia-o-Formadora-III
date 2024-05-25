import { Component } from '@angular/core';
import { ApiCepService } from './api-cep.service';

@Component({
  selector: 'app-cep',
  templateUrl: './cep.component.html',
  styleUrls: ['./cep.component.css']
})
export class CepComponent {
  cep: string = '';
  endereco: any = null;

  constructor(private apiCepService: ApiCepService) { }

  buscarEndereco() {
    this.apiCepService.getEndereco(this.cep).subscribe(
      data => this.endereco = data,
      error => console.error('Erro ao buscar endereço', error)
    );
  }
}

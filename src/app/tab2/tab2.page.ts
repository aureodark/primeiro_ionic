import { Cliente } from './../cliente/cliente.model';
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ClienteService } from '../cliente/cliente.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page {
  cliente: Cliente;                                             // Ligado a importação
  clientes: Cliente[] = [];                                     // Vetor de cliente, função é armazenar dentro da Class
  confPws: string;

  constructor(
    public alertController: AlertController,
    private clienteService: ClienteService
    ) {                                               // Função executa quando se cria o componente. 
    this.cliente = new Cliente;
  }


  formDados(form){
    console.log(form);
    if (form.valid) {
      this.addCliente(this.cliente)?form.reset():"";
    }
  }

  addCliente(cliente: Cliente):boolean {
    try {
      this.cliente.validar(this.confPws);

      //this.clientes.push(cliente);                                // Adiciona um item ao vetor
      this.clienteService.addCliente(cliente);
      this.cliente = new Cliente;                                 // Cria um novo cliente
      this.confPws = "";                             
      this.presentAlert("Aviso", "Cadastrado", "sucess");                                 // Exiba na área console do navegador
      return true;
    } catch (erros) {
      this.presentAlert("Erro", erros, "danger");
    }

  }
  async presentAlert(tipo: string, texto: string, cor: string) {
    const alert = await this.alertController.create({
      header: tipo,
      //subHeader: 'Subtitle',
      message: texto,
      cssClass: cor,
      buttons: ['Tranks']
    });

    await alert.present();
  }

}
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/usuario/usuario';

@Component({
  selector: 'usuario-cadastro',
  templateUrl: './usuario-cadastro.component.html',
  styleUrls: ['../usuario.component.css']
})
export class UsuarioCadastroComponent implements OnInit {
 
  public usuario:Usuario = new Usuario();
  constructor() { }

  ngOnInit() {

  }

  public salvar(){
    console.log(this.usuario);
     alert("Salvo com sucesso");
  }

}

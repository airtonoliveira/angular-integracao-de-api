import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/usuario/usuario';
import { UsuarioService } from 'src/app/usuario.service';

@Component({
  selector: 'usuario-cadastro',
  templateUrl: './usuario-cadastro.component.html',
  styleUrls: ['../usuario.component.css']
})
export class UsuarioCadastroComponent implements OnInit {
 
  public usuario:Usuario = new Usuario();

  constructor(
    private usuarioService: UsuarioService

  ) { }

  ngOnInit() {

  }

  public salvar(){
   this.usuarioService.salvar(this.usuario).subscribe(
      response => {
        alert("Salvo com sucesso");
      }, 
      error => {
        alert("Algo deu errado");
      }
   );
  
  
  }

}

import { Component, OnInit } from '@angular/core';
import { Usuario } from './usuario';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  //public usuario:Usuario;
  public usuarios:Usuario[];
 

  constructor(private usuarioService:UsuarioService) { }

  ngOnInit() {
    this.listaUsuario()
  }

  public listaUsuario() {
    this.usuarioService.listaUsuarios().subscribe(
      response => {
        this.usuarios = response
      },
      error => {
        alert("Algo deu errado")
      }
    )
  }

  public deletar(id: string) {

    // this.confirmationService.confirm({
    //   message: 'Você tem certeza que deseja deletar?',
    //   accept: () => {
        this.usuarioService.delete(id).subscribe(
          r => {
            this.listaUsuario()
          }
        )
   //   }
    //}
    //)  
  };



}

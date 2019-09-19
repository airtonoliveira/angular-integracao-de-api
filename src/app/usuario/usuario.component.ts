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
    //this.usuario=this.usuarioService.getUsuario();
    this.usuarios=this.usuarioService.listaUsuarios();
  }

}

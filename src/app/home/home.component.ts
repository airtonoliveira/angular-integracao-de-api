import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Usuario } from '../usuario/usuario';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public usuario:Usuario;

  constructor(private usuarioService:UsuarioService) { }

  ngOnInit() {
    this.usuario=this.usuarioService.getUsuario();
  }

}

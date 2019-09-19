import { Injectable } from '@angular/core';
import { Usuario } from './usuario/usuario';

//Permite injeção de dependencia
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }

  public listaUsuarios():Usuario[]{
    return [
      {
        nome:"Aírton",
        email:"airton@email.com"
      },
      {
        nome:"José",
        email:"jose@email.com"
      },
      {
        nome:"João",
        email:"joao@email.com"
      }
    ];
  }

  public getUsuario():Usuario{
      let usuario = new Usuario();
      usuario.nome = 'Aírton Oliveira';
      usuario.email = 'airton@email.com';
      return usuario;
  }
}

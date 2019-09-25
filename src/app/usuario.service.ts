import { Injectable } from '@angular/core';
import { Usuario } from './usuario/usuario';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

//Permite injeção de dependencia
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url = 'http://localhost:8080/usuario';

  constructor(
    private http:HttpClient
    
    ) { }

   public salvar(usuario:Usuario):Observable<Usuario>{
        return this.http.post<Usuario>(this.url, usuario);
   }

  public listaUsuarios():Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.url);
  }

  public getUsuario():Usuario{
      let usuario = new Usuario();
      usuario.nome = 'Aírton Oliveira';
      usuario.email = 'airton@email.com';
      return usuario;
  }
}

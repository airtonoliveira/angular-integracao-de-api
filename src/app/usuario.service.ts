import { Injectable } from '@angular/core';
import { Usuario } from './usuario/usuario';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

//Permite injeção de dependencia
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url = environment.host + 'usuario';

  constructor(
    private http:HttpClient
    
    ) { }

    public delete(id:string):Observable<any>{
      return this.http.delete(this.url + "/" + id)
    }
   

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

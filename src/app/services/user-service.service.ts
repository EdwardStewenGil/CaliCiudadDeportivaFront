import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UsuarioDto } from '../modelo/usuario-dto';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  respuesta = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private httpClient: HttpClient,) { }



  public getAllUser(): Observable<any> {
    return this.httpClient.get<UsuarioDto[]>(
      'https://caliccd.herokuapp.com/codesa/getAllUser',
      this.respuesta,

    );
  }

  public createUser(data: UsuarioDto): Observable<boolean> {
    return this.httpClient.post<any>(
      'https://caliccd.herokuapp.com/codesa/createUser',
      data,
      this.respuesta
    );  
  }



}

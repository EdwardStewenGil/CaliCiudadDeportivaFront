import { Component, OnInit } from '@angular/core';
import { UsuarioDto } from '../modelo/usuario-dto';
import { UserServiceService } from '../services/user-service.service'
import { empty, Observable } from "rxjs";
import Swal from 'sweetalert2'

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  usuarioDto: UsuarioDto[] = [];
  nuevoUsuario: UsuarioDto = { nombre: '', identificacion: '', celular: '', correo: '', comuna: '', genero: '' };


  constructor(
    private userServiceService: UserServiceService) { }

  ngOnInit(): void { }



  public crearUsuario() {

    if (this.nuevoUsuario.nombre == "") {
      Swal.fire('nombre no diligenciado')
    } else if (this.nuevoUsuario.celular == "") {

      Swal.fire('Celular no diligenciado')

    } else if (this.nuevoUsuario.celular?.length != 10) {

      Swal.fire('El celular es de 10 digitos')

    }else if (this.nuevoUsuario.correo == "") {

      Swal.fire('correo no diligenciado')

    } else if (this.nuevoUsuario.comuna == "") {

      Swal.fire('comuna no diligenciado')

    } else {
      this.userServiceService.createUser(this.nuevoUsuario).subscribe(
        (data: any) => {
          if (data.status == 200) {

            Swal.fire('Felicidades ya estas participando')
          } else {

            Swal.fire(data.payload.message)
          }
        }, (error) => {
          console.log(error);
        }
      );


    }








  }
}


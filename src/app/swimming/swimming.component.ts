import { Component, OnInit } from '@angular/core';
import { UsuarioDto } from '../modelo/usuario-dto';
import { UserServiceService } from '../services/user-service.service'
import { empty, Observable } from "rxjs";
import Swal from 'sweetalert2'


@Component({
  selector: 'app-swimming',
  templateUrl: './swimming.component.html',
  styleUrls: ['./swimming.component.css']
})
export class SwimmingComponent implements OnInit {
  usuarioDto: UsuarioDto[] = [];
  nuevoUsuario: UsuarioDto = { nombre: '', identificacion: '', direccion: '', comuna: '', celular: '', fecha_na:''  , genero: '', institucion: '', evento: "swimming" };

  terminos = ""
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

    } else if (this.nuevoUsuario.correo == "") {

      Swal.fire('correo no diligenciado')

    } else if (this.nuevoUsuario.comuna == "") {

      Swal.fire('comuna no diligenciado')

    } else if (this.terminos == "") {

      Swal.fire('debes aceptar termino y condiciones')

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
          Swal.fire('error al intentar registrate por favor intentalo mas tarde')

        }
      );


    }







  }
}


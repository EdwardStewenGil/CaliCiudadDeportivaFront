import { Component, OnInit } from '@angular/core';
import { UsuarioDto } from '../modelo/usuario-dto';
import { UserServiceService } from '../services/user-service.service'
import { empty, Observable } from "rxjs";
import Swal from 'sweetalert2'


@Component({
  selector: 'app-carrera',
  templateUrl: './carrera.component.html',
  styleUrls: ['./carrera.component.css']
})
export class CarreraComponent implements OnInit {
  usuarioDto: UsuarioDto[] = [];
  nuevoUsuario: UsuarioDto = { nombre: '', identificacion: '', direccion: '', comuna: '', celular: '', correo: '', fecha_na: '', genero: '', institucion: '', evento: "carrera universitaria" };

  terminos = ""
  constructor(
    private userServiceService: UserServiceService) { }

  ngOnInit(): void { }


  public crearUsuario() {



    if (this.nuevoUsuario.nombre == "") {
      Swal.fire('nombre no diligenciado')
    }
    else if (this.nuevoUsuario.identificacion == "") {

      Swal.fire('Identificacion no diligenciado')

    }
    else if (this.nuevoUsuario.direccion == "") {

      Swal.fire('Direccion no diligenciado')

    } else if (this.nuevoUsuario.comuna == "") {

      Swal.fire('Comuna no diligenciada')

    } else if (this.nuevoUsuario.celular?.length != 10) {

      Swal.fire('El celular es de 10 digitos')

    } else if (this.nuevoUsuario.correo == "") {

      Swal.fire('Correo no diligenciado')

    } else if (this.nuevoUsuario.fecha_na?.length != 10) {

      Swal.fire('El formato de fecha es dd-mm-yyyy ejemplo 22-04-2000')

    } else if (this.nuevoUsuario.genero == "") {

      Swal.fire('Genero no diligenciado')

    } else if (this.nuevoUsuario.institucion == "") {

      Swal.fire('Institucion no diligenciado')

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


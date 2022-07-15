import { Component, OnDestroy, OnInit } from '@angular/core';
import { UsuarioDto } from '../modelo/usuario-dto';
import { UserServiceService } from '../services/user-service.service'
import { Subject } from "rxjs";


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit, OnDestroy {

dtOptions: DataTables.Settings ={}
  usuarioDto: UsuarioDto[] = [];
  dtTrigger: Subject<any> = new Subject<any>()





  constructor(
    private userServiceService: UserServiceService) { }

  ngOnInit(): void { 
    this.dtOptions={
      language:{
        url: '//cdn.datatables.net/plug-ins/1.12.1/i18n/es-ES.json'
      },
      pagingType: 'full_numbers',
  
    };
    
    
    this.userServiceService.getAllUser().subscribe((data: any) => {
      this.usuarioDto = data.payload;
      this.dtTrigger.next(data.payload);
 



    }, error => {
      console.log(error);


    })}

    ngOnDestroy(): void {
      
      this.dtTrigger.unsubscribe();
    }







}


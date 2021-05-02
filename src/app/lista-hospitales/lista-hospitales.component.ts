import { Component, OnInit } from '@angular/core';
import { Hospital } from '../_models/hospital';
import { HospitalesService } from '../_services/hospitales.service';

@Component({
  selector: 'app-lista-hospitales',
  templateUrl: './lista-hospitales.component.html',
  styleUrls: ['./lista-hospitales.component.scss']
})
export class ListaHospitalesComponent implements OnInit {

  public lista: Hospital[]=[];
  constructor(private service : HospitalesService) { }

  ngOnInit(): void {
    this.service.getAll().subscribe((result)=>{
      this.lista=result;
    }, (error)=>{
      console.log("Error al obtener hospitales");
    })
  }

}

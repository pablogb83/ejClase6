import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hospital } from '../_models/hospital';

@Injectable({
  providedIn: 'root'
})
export class HospitalesService {
  public lista: Hospital[];

  constructor(lista: Hospital[]) {
    this.lista=lista;
   }
  
  getAll():Observable<Hospital[]>{
    const result = new Observable<Hospital[]>(observer=>{
      setTimeout(()=>{
        observer.next(this.lista);
      }, 1000);
    });
    return result;
  }

}

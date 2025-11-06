import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  private url = ''

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    
  }

  save(): Observable<any> {
    
  }

  delete(): Observable<any> {
    
  }

  update(): Observable<any> {
    
  }

}
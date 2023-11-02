import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PerfilesService {

  constructor(private http: HttpClient) { }

  obtenerPerfiles() {
    return this.http.get<any[]>("http://localhost:9090/profiles");
  }
}

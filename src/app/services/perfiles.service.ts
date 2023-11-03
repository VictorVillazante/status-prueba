import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from "../../config";
import { Profile } from '../models/Profile';
@Injectable({
  providedIn: 'root'
})
export class PerfilesService {

  constructor(private http: HttpClient) { }

  obtenerPerfiles() {
    return this.http.get<Profile[]>(`${API_URL}/profiles`);
  }
}

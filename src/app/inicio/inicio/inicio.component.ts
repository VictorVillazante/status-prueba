import { Component, HostListener, OnInit } from '@angular/core';
import { PerfilesService } from '../../services/perfiles.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  filtrarPerfiles(nombre: String) {
    switch (nombre) {
      case "todos":
        this.perfilesAux=this.perfiles;
        break;
      case "bolivia":
        this.perfilesAux=this.perfiles;
        this.perfilesAux=this.perfilesAux.filter((p:any)=>p.country=="Bolivia")
        break;
      case "argentina":
        this.perfilesAux=this.perfiles;
        this.perfilesAux=this.perfilesAux.filter((p:any)=>p.country=="Argentina")
        break;
    }
    console.log(this.perfilesAux);
    console.log(this.perfiles);
  }

  readonly caracteristicas_status = [
    {
      "img_caracteristica": "../../../assets/images/img_inicio/icon_perfiles_profesionales.png",
      "titulo": "Perfiles profesionales",
      "descripcion": "Encuentra a los mejores profesionales del derecho que te brindarán asesoramiento."
    },
    {
      "img_caracteristica": "../../../assets/images/img_inicio/icon_revista_juridica.png",
      "titulo": "Perfiles profesionales",
      "descripcion": "Encuentra a los mejores profesionales del derecho que te brindarán asesoramiento."
    }
  ]
  constructor(private perfilesService: PerfilesService) {
  }
  ngOnInit(): void {
    this.obtenerPerfiles();
  }
  perfiles: any[] = [];
  itemsEnCarrusel: number = 4;
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.obtenerAnchoPantalla();

  }
  obtenerAnchoPantalla() {
    let screenWidth = window.innerWidth;
    if (screenWidth > 1100) {
      this.itemsEnCarrusel = 4;
      this.obtenerPerfiles();

    } else {
      if (screenWidth > 900) {
        this.itemsEnCarrusel = 3;
        this.obtenerPerfiles();

      } else {
        if (screenWidth > 700) {
          this.itemsEnCarrusel = 2;
          this.obtenerPerfiles();

        } else {
          this.itemsEnCarrusel = 1;
          this.obtenerPerfiles();

        }
      }
    }

  }
  perfilesAux:any=[];
  obtenerPerfiles() {
    this.perfilesService.obtenerPerfiles().subscribe((data) => {
      console.log(data);
      this.perfiles = data;
      this.perfilesAux=data;
    })
  }
}

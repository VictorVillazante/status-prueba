import { Component, HostListener, OnInit } from '@angular/core';
import { Profile } from 'src/app/models/Profile';
import { PerfilesService } from '../../services/perfiles.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  elegido: String = "";
  filtrarPerfiles(nombre: String) {
    this.elegido = nombre;
    let id = "";
    switch (nombre) {
      case "todos":
        id = "btn-todos";
        this.perfilesAux = this.perfiles;
        break;
      case "bolivia":
        id = "btn-bolivia";
        this.perfilesAux = this.perfiles;
        this.perfilesAux = this.perfilesAux.filter((p: any) => p.country == "Bolivia")
        break;
      case "argentina":
        id = "btn-argentina";
        this.perfilesAux = this.perfiles;
        this.perfilesAux = this.perfilesAux.filter((p: any) => p.country == "Argentina")
        break;
    }
    this.cambiarColorOpciones(id);

  }
  cambiarColorOpciones(id: string) {
    let boton = document.getElementById("btn-todos");
    if (boton) {
      boton.style.backgroundColor = "#C6C1E4";
      boton.style.color = "#24245B";
    }
    boton = document.getElementById("btn-bolivia");
    if (boton) {
      boton.style.backgroundColor = "#C6C1E4";
      boton.style.color = "#24245B";
    }
    boton = document.getElementById("btn-argentina");
    if (boton) {
      boton.style.backgroundColor = "#C6C1E4";
      boton.style.color = "#24245B";
    }
    boton = document.getElementById(id);
    if (boton) {
      boton.style.backgroundColor = "#54528F";
      boton.style.color = "#EFEFEF";
    }
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
  perfiles: Profile[] = [];
  itemsEnCarrusel: number = 4;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.obtenerAnchoPantalla();
  }

  obtenerAnchoPantalla() {
    let screenWidth = window.innerWidth;
    if (screenWidth > 1100) {
      this.obtenerPerfiles();
      this.itemsEnCarrusel = 4;
    } else {
      if (screenWidth > 900) {
        this.obtenerPerfiles();
        this.itemsEnCarrusel = 3;

      } else {
        if (screenWidth > 700) {
          this.obtenerPerfiles();
          this.itemsEnCarrusel = 2;

        } else {
          this.obtenerPerfiles();
          this.itemsEnCarrusel = 1;

        }
      }
    }
  }
  perfilesAux: Profile[] = [];
  obtenerPerfiles() {
    this.perfilesService.obtenerPerfiles().subscribe((data) => {
      this.perfiles = data;
      this.perfilesAux = data;
      this.filtrarPerfiles("todos");
    })
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  readonly caracteristicas_status=[
    {
      "img_caracteristica":"../../../assets/images/img_inicio/icon_perfiles_profesionales.png",
      "titulo":"Perfiles profesionales",
      "descripcion":"Encuentra a los mejores profesionales del derecho que te brindarán asesoramiento."
    },
    {
      "img_caracteristica":"../../../assets/images/img_inicio/icon_revista_juridica.png",
      "titulo":"Perfiles profesionales",
      "descripcion":"Encuentra a los mejores profesionales del derecho que te brindarán asesoramiento."
    }
  ]
}

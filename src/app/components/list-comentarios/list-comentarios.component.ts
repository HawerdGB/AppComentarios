import { Component, OnInit } from '@angular/core';
import { ComentarioService } from 'src/app/services/comentario.service';
import { Comentario } from 'src/interfaces/Comentario';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-comentarios',
  templateUrl: './list-comentarios.component.html',
  styleUrls: ['./list-comentarios.component.css']
})
export class ListComentariosComponent implements OnInit {

 listComentarios: Comentario[]=[];

  constructor(private _comentarioService: ComentarioService,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getComentarios();
  }

getComentarios(){
  this._comentarioService.getListComentarios().subscribe((data) => {
    this.listComentarios = data;
  }, (error) => {
    console.log(error);
  })
  }

  eliminarComentario(id: any){
      console.log(id);
      this._comentarioService.deleteComentario(id).subscribe(
        () => {this.toastr.warning('El comentario fue eliminado con exito', 'Comentario Eliminado');
          this.getComentarios()
        },
        error => {
          console.log(error);
        }
      )
  }

}

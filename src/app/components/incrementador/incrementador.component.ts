import {
  Component,
  ViewChild,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ElementRef
} from "@angular/core";

@Component({
  selector: "app-incrementador",
  templateUrl: "./incrementador.component.html",
  styles: []
})
export class IncrementadorComponent implements OnInit {
  @Input() porcentaje: number = 50;
  @Input() leyenda: string = "Leyenda";
  @Output() cambioValor: EventEmitter<number> = new EventEmitter();
  @ViewChild("progreso") elemHTML: ElementRef;

  constructor() {}

  ngOnInit() {}

  onChanges(valor: number) {
    if (this.porcentaje >= 100) {
      this.porcentaje = 100;
    } else if (this.porcentaje <= 0) {
      this.porcentaje = 0;
    } else {
      this.porcentaje = valor;
    }
    this.elemHTML.nativeElement.value = this.porcentaje;
    this.elemHTML.nativeElement.focus();
    this.cambioValor.emit(this.porcentaje);
  }

  sumarValor(valor) {
 
    this.porcentaje += valor;
    if (this.porcentaje >= 100) {
      this.porcentaje = 100;
    } else if (this.porcentaje <= 0) {
      this.porcentaje = 0;
    } 
    
    this.elemHTML.nativeElement.focus();
    this.cambioValor.emit(this.porcentaje);
  }
}

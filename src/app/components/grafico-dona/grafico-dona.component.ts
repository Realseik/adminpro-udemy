import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-grafico-dona",
  templateUrl: "./grafico-dona.component.html",
  styles: []
})
export class GraficoDonaComponent implements OnInit {
  @Input() data: any;
  @Input() leyenda: string;
  @Input() labels: string[];
  @Input() type: string;

  constructor() {}

  ngOnInit() {}
  // events

  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }
}

import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-progress",
  templateUrl: "./progress.component.html",
  styles: []
})
export class ProgressComponent implements OnInit {
  porcentaje1 = 25;
  porcentaje2 = 75;

  constructor() {}

  ngOnInit() {}
}

import { GraficoDonaComponent } from './../components/grafico-dona/grafico-dona.component';
import { IncrementadorComponent } from "./../components/incrementador/incrementador.component";
import { PagesComponent } from "./pages.component";
import { ProgressComponent } from "./progress/progress.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Graficas1Component } from "./graficas1/graficas1.component";
import { SharedModule } from "../shared/shared.module";
import { PAGES_ROUTES } from "./pages.routes";
import { ChartsModule } from "ng2-charts";

@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    PagesComponent,
    IncrementadorComponent,
    GraficoDonaComponent,
  ],
  imports: [SharedModule, PAGES_ROUTES, FormsModule, ChartsModule],
  exports: [DashboardComponent, ProgressComponent, Graficas1Component],
  providers: []
})
export class PagesModule {}

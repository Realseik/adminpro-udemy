import { AccountSettingsComponent } from "./account-settings/account-settings.component";
import { Routes, RouterModule } from "@angular/router";
import { PagesComponent } from "./pages.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProgressComponent } from "./progress/progress.component";
import { Graficas1Component } from "./graficas1/graficas1.component";
import { NopagefoundComponent } from "../shared/nopagefound/nopagefound.component";
import { PromesasComponent } from "./promesas/promesas.component";
import { RxjsComponent } from "./rxjs/rxjs.component";

const pagesRoutes: Routes = [
  {
    path: "",
    component: PagesComponent,
    children: [
      {
        path: "dashboard",
        component: DashboardComponent,
        data: {
          titulo: "Dashboard",
          metaDescripcion: "Página principal del ejemplo adminpro"
        }
      },
      {
        path: "progress",
        component: ProgressComponent,
        data: {
          titulo: "Progress",
          metaDescripcion:
            "Ejemplos sobre como se relacionan varios componentes y pasar parametros"
        }
      },
      {
        path: "graficas1",
        component: Graficas1Component,
        data: { titulo: "Graficas", metaDescripcion: "Ejemplos sobre graficas" }
      },
      {
        path: "account-settings",
        component: AccountSettingsComponent,
        data: {
          titulo: "Configuracion",
          metaDescripcion: "Configuracion de la pagina y su aspecto"
        }
      },
      {
        path: "promesas",
        component: PromesasComponent,
        data: { titulo: "Promesas", metaDescripcion: "Uso de promesas" }
      },
      {
        path: "observables",
        component: RxjsComponent,
        data: { titulo: "Observables", metaDescripcion: "Uso de Observables" }
      },
      { path: "", redirectTo: "/dashboard", pathMatch: "full" }
    ]
  }
];
export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);

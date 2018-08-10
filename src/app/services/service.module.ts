import { NgModule } from "../../../node_modules/@angular/core";
import { CommonModule } from "../../../node_modules/@angular/common";
import {
  SettingsService,
  SharedService,
  SidebarService
} from "./services.index";

@NgModule({
  imports: [CommonModule],
  providers: [SettingsService, SharedService, SidebarService]
})
export class ServiceModule {}

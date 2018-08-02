import { SidebarComponent } from './sidebar/sidebar.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    HeaderComponent,
    BreadcrumbsComponent,
    NopagefoundComponent,
    SidebarComponent
  ],
  imports: [],
  exports: [
    HeaderComponent,
    BreadcrumbsComponent,
    NopagefoundComponent,
    SidebarComponent
  ],
  providers: []
})
export class SharedModule {}

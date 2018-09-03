import { Router, ActivationEnd } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { filter, map } from "../../../../node_modules/rxjs/operators";
import { Title, Meta, MetaDefinition } from "@angular/platform-browser";

@Component({
  selector: "app-breadcrumbs",
  templateUrl: "./breadcrumbs.component.html",
  styles: []
})
export class BreadcrumbsComponent implements OnInit {
  titulo: string;

  constructor(
    private router: Router,
    private title: Title,
    private meta: Meta
  ) {
    this.getDataRoute().subscribe(data => {
      console.log(data.titulo);
      this.titulo = data.titulo;
      this.title.setTitle(this.titulo);

      let metatag: MetaDefinition = {
        name: "Descripcion",
        content: data.metaDescripcion
      };
      this.meta.removeTag("name='Descripcion'");
      this.meta.addTag(metatag, true);
    });
  }

  ngOnInit() {}

  getDataRoute() {
    return this.router.events.pipe(
      filter(evt => evt instanceof ActivationEnd),
      filter((evt: ActivationEnd) => evt.snapshot.firstChild === null),
      map((evt: ActivationEnd) => evt.snapshot.data)
    );
  }
}

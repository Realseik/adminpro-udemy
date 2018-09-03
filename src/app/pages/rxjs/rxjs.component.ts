import { Component, OnInit, RendererFactory2, OnDestroy } from "@angular/core";
import {
  Observable,
  Subscriber,
  Subscription
} from "../../../../node_modules/rxjs";
import { retry, map, filter } from "rxjs/operators";

@Component({
  selector: "app-rxjs",
  templateUrl: "./rxjs.component.html",
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {
  suscription: Subscription;

  constructor() {
    this.suscription = this.regresaObservable().subscribe(
      number => {
        console.log(number);
      },
      error => {
        console.log("ERROR! ", error);
      },
      () => {
        console.log("El observable terminó");
      }
    );
    // this.regresaObservable()
    // .pipe(retry(2))
    // .subscribe(
    //   number => {
    //     console.log(number);
    //   },
    //   error => {
    //     console.log("ERROR! ", error);
    //   },
    //   () => {
    //     console.log("El observable terminó");
    //   }
    // );
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.suscription.unsubscribe();
  }

  regresaObservable(): Observable<any> {
    return new Observable((observer: Subscriber<any>) => {
      let contador = 0;
      let intervalo = setInterval(() => {
        contador += 1;
        const salida = {
          valor: contador
        };
        observer.next(salida);
        // if (contador === 3) {
        //   clearInterval(intervalo);
        //   observer.complete();
        // }
      }, 1000);
    }).pipe(
      map(resp => resp.valor),
      filter(valor => {
        if (valor % 2 === 1) {
          return true; // Impar
        } else {
          return false; // Par
        }
      })
    );
  }

  regresaObservableRetry(): Observable<number> {
    return new Observable((observer: Subscriber<number>) => {
      let contador = 0;

      let intervalo = setInterval(() => {
        contador += 1;
        observer.next(contador);
        if (contador === 3) {
          clearInterval(intervalo);
          observer.complete();
        }
        if (contador === 2) {
          clearInterval(intervalo);
          observer.error("Se ha producido un error");
        }
      }, 1000);
    });
  }
}

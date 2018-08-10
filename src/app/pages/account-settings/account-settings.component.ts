import { SettingsService } from './../../services/services.index';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {
  constructor(public _settings: SettingsService) {}

  ngOnInit() {
    this.cambiarSelector(this._settings.ajustes.tema);
  }

  CambiarColor(color: string) {
    this.cambiarSelector(color);
    this._settings.aplicarTema(color);
  }

  cambiarSelector(id: string) {
    console.log(id);
    const lista = document.getElementsByClassName('working');
    if (lista.length > 0) {
      lista[0].classList.remove('working');
    }
    document.getElementById(id).classList.add('working');
  }
}

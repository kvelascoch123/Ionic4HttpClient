import { Component } from '@angular/core';
import { CorsService } from '../services/cors.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private cors:CorsService) {
  }

}

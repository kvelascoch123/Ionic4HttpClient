import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CorsService {
  constructor(private http: HttpClient) { 
    console.log("SERVICIO CORS");
  this.cargar();
  }
  
  cargar(){
    let url = "http://localhost:8000/api/alexa/user/kevin/abcd";
    this.http.get(url)
     .subscribe(data=>{
      console.log(data);
      
    })
  }
}

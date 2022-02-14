import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Driver } from 'src/app/models/Driver';
import { environment } from '../../../../../../environments/environment';


@Injectable({
    providedIn: 'root'
})

export class DriverService {

  public data: any;

    constructor(
        private http: HttpClient
    ) { }

    public getAll(): Promise<any>{
        //return this.http.get(environment.URL_API+'driver/getAll');
        return new Promise(
          resolve => {
            this.http.get(environment.URL_API+'driver/getAll')
            .subscribe(
              (response) => {
                if (response === false) { resolve(response); }
                this.data = response;
                resolve(true);
              }
            );
          }
        );
    }

    public save(data:Driver):Promise<any> {
      //return this.http.post(environment.URL_API+'driver', data)
      return new Promise(
        resolve => {
          this.http.post(environment.URL_API+'driver', data)
          .subscribe(
            (response) => {
              if (response === false) { resolve(response); }
              resolve(true);
            }
          );
        }
      );

    }

    


}
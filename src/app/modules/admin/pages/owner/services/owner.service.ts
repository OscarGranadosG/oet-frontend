import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Owner } from '../../../../../models/owner';
import { environment } from '../../../../../../environments/environment';


@Injectable({
    providedIn: 'root'
})

export class OwnerService {

  public data: any;

    constructor(
        private http: HttpClient
    ) { }

    public getAll(): Promise<any>{
        return new Promise(
          resolve => {
            this.http.get(environment.URL_API+'owner/getAll')
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

    public save(data:Owner):Promise<any> {
      return new Promise(
        resolve => {
          this.http.post(environment.URL_API+'owner', data)
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
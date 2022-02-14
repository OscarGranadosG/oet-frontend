import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../../../environments/environment';


@Injectable({
    providedIn: 'root'
})

export class ReportService {

  public data: any;

    constructor(
        private http: HttpClient
    ) { }

    public getReport(): Promise<any>{
        //return this.http.get(environment.URL_API+'driver/getAll');
        return new Promise(
          resolve => {
            this.http.get(environment.URL_API+'report')
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

}
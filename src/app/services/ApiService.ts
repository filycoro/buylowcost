import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from './GlobalService';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    public user: any;

    constructor(
        public globalService: GlobalService,
        private http: HttpClient
    ) { }



    save(file, dataEmp, education1, education2, work1, work2, work3): Promise<any> {
        return new Promise((resolve, reject) => {
            return this.http.post<any>(this.globalService.serverUrl + 'api/test', { file: file, emp: dataEmp, edu1: education1, edu2: education2, work1: work1, work2: work2, work3: work3 }).subscribe((res) => {
                //console.log(res);
                resolve(res);
            }, (err) => {
                reject(err);
            });
        });//promise
    }
    save_truck_quote(data): Promise<any> {
        return new Promise((resolve, reject) => {
            return this.http.post<any>(this.globalService.serverUrl + 'api/save_truck_quote', { data: data }).subscribe((res) => {
                //console.log(res);
                resolve(res);
            }, (err) => {
                reject(err);
            });
        });//promise
    }
    Get_applies(): Promise<any> {
        return new Promise((resolve, reject) => {
            return this.http.get<any>(this.globalService.serverUrl + 'api/get_applies', {}).subscribe((res) => {
                //console.log(res);
                resolve(res);
            }, (err) => {
                reject(err);
            });
        });//promise
    }

    Get_quotes_applies(): Promise<any> {
        return new Promise((resolve, reject) => {
            return this.http.get<any>(this.globalService.serverUrl + 'api/get_quotes_truck', {}).subscribe((res) => {
                //console.log(res);
                resolve(res);
            }, (err) => {
                reject(err);
            });
        });//promise
    }


    Getall_byid(id): Promise<any> {
        return new Promise((resolve, reject) => {
            return this.http.get<any>(this.globalService.serverUrl + 'api/get_all_id&id=' + id, {}).subscribe((res) => {
                //console.log(res);
                resolve(res);
            }, (err) => {
                reject(err);
            });
        });//promise
    }



}

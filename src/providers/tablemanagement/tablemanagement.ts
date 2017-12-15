import { BussinessOperatorProvider } from '../shared/bussiness-operator';
import { Observable } from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { HTTP } from '@ionic-native/http';
/*
  Generated class for the TablemanagementProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TablemanagementProvider {

  constructor(public http: HttpClient, public BO: BussinessOperatorProvider) {
  }

  getTableM(): Observable<any> {
    return this.http.post(this.BO.tableserv() + "search", {}, {});
  }

  NewItemM(fullitem: any) {
    return this.http.post(this.BO.tableserv(), fullitem, {});
  }

  getItemId(searchitem: any): Observable<any> {
    return this.http.post(this.BO.tableserv() + "search", searchitem, {});
  }

  DeleteItem(id: any) {
    return this.http.delete(this.BO.tableserv() + id, {});
  }

  Filter(SinglePart: any) {
    return this.http.post(this.BO.tableserv() + "search", SinglePart, {})
  }


  ModifyItem(fullitem: any): Observable<any> {
    return this.http.post(this.BO.tableserv(), fullitem, {});
  }

}

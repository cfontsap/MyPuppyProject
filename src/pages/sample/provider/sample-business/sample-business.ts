import { BusinessOperatorProvider } from '../../../../providers/shared/business-operator'
import { Observable } from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { HTTP } from '@ionic-native/http';
/*
  Generated class for the samplebusinessProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class sampleBusinessProvider {

  constructor(public http: HttpClient, public BO: BusinessOperatorProvider) {
  }

  getTableM(): Observable<any> {
    return this.http.post(this.BO.sampleService() + "search", {}, {});
  }

  Save(fullitem: any) {
    return this.http.post(this.BO.sampleService(), fullitem, {});
  }

  getItemId(searchitem: any): Observable<any> {
    return this.http.post(this.BO.sampleService() + "search", searchitem, {});
  }

  DeleteItem(id: any) {
    return this.http.delete(this.BO.sampleService() + id, {});
  }

  Filter(SinglePart: any) {
    return this.http.post(this.BO.sampleService() + "search", SinglePart, {})
  }

}
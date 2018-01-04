import { Injectable } from '@angular/core';
import { url } from '../../assets/serverPath';


@Injectable() export class BusinessOperatorProvider {
    public serverPath = url;
    public restPath = url + 'services/rest/';
    constructor() {}
    login() {
        return this.restPath + 'login';
    }
    logout() {
        return this.restPath + 'logout';
    }
    getCsrf() {
        return this.restPath + 'security/v1/csrftoken';
    }
    sampleService() {
        return this.restPath + 'ionicBasic/v1/sample/';
    }
}
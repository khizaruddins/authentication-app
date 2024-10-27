import { HttpClient, HttpHeaders } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { environment } from "../../../environment/environment";

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    getHeaders() {
        const options = {
            headers: new HttpHeaders({
              'Content-Type': 'application/json',
            })
          };
          return options;
    }

    httpClient = inject(HttpClient);
    apiBaseUrl = environment.API_BASE_URL; 

    get(url: string) {
        const apiUrl = this.apiBaseUrl + url;
        return this.httpClient.get(apiUrl, this.getHeaders());
    }


    post(url: string, payload: any) {
        const apiUrl = this.apiBaseUrl + url;
        return this.httpClient.post(apiUrl, payload, this.getHeaders())
    }

    delete(url: string) {
        const apiUrl = this.apiBaseUrl + url;
        return this.httpClient.delete(apiUrl, this.getHeaders());
    }
}
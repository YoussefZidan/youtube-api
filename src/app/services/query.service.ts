import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";

@Injectable({
  providedIn: "root"
})
export class QueryService {
  constructor(private http: HttpClient) {}

  getData(path: string): Observable<any> {
    return this.http.get(path);
  }
}

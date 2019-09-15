import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { tap, map } from "rxjs/operators";
import { Subject } from "rxjs/Subject";
import { Observable } from "rxjs/Observable";
import { Character } from "../models/character";

@Injectable()
export class DataService {
  private baseUrl = "https://swapi.co/api/";
  private characterSubject: Subject<Character> = new Subject();
  character$: Observable<Character> = this.characterSubject.asObservable();

  constructor(private http: HttpClient) {}

  getResource() {
    return this.http.get(this.baseUrl + "people").pipe(
      tap(() => {
        console.log("Before map");
      }),
      map(res => {
        return res["results"];
      }),
      tap(() => {
        console.log("After map");
      })
    );
  }
}

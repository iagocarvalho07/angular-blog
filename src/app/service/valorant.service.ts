import { HttpClient } from "@angular/common/http"
import { Datum, Welcome } from "../data/model/valoranteModel"
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { response } from "express";

@Injectable({providedIn: 'root'})
export class valorantService {
  private url = "https://valorant-api.com/v1/agents/"

  constructor(private httpclient: HttpClient){}

  getAgents():Observable<Datum[]>{
    return this.httpclient.get<Welcome>(this.url).pipe(
      map(response => response.data)
    );
  }

  getAgentById(id:string){
    return this.httpclient.get<Welcome>(this.url+id).pipe(
      map(response => response.data)
    );

  }

}

import { Component, OnInit } from '@angular/core';
import { MenuTittleComponent } from "../../components/menu-tittle/menu-tittle.component";
import { BigCardComponent } from "../../components/big-card/big-card.component";
import { SmallCardComponent } from "../../components/small-card/small-card.component";
import { MenuBarComponent } from "../../components/menu-bar/menu-bar.component";
import { Datum, Welcome } from '../../data/model/valoranteModel';
import { valorantService } from '../../service/valorant.service';
import { NgFor } from '@angular/common';
import { AsyncPipe  } from '@angular/common';
import { CardtestComponent } from "../../components/cardtest/cardtest.component";



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MenuTittleComponent, BigCardComponent, SmallCardComponent, MenuBarComponent, NgFor, AsyncPipe, CardtestComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  AgentName: String = ""
  agentPhoto: String = ""
  AgentDescription: String = ""
  ValorantAgente: Datum[] = [];


  constructor(private ValoranteService: valorantService){}

  ngOnInit(): void {
    this.ValoranteService.getAgents().subscribe(
      (data: Datum[]) => {
        this.ValorantAgente = data;
       // console.log(this.ValorantAgente)
      }
    )
  }




}

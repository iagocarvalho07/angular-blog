import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake';
import { valorantService } from '../../service/valorant.service';
import { Datum } from '../../data/model/valoranteModel';
import { NgFor } from '@angular/common';
import { AsyncPipe } from '@angular/common';
import { map } from 'rxjs';
import { HabilitiesComponent } from "./habilities/habilities.component";

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [NgFor, AsyncPipe, HabilitiesComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css',
})
export class ContentComponent {
  photoCover: string = '';
  contentTitle: string = '';
  contentDescription: string = '';
  private id: string | null = '0';
  valorantAgenPerId!: Datum;

  constructor(
    private route: ActivatedRoute,
    private valorante: valorantService
  ) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => (this.id = value.get('id')));
    // this.setValuesToComponent(this.id)
    this.getAgentsById(this.id);
  }
  getAgentsById(id: string | null) {
    if (id != null) {
      return this.valorante.getAgentById(id!).subscribe((data: Datum[]) => {
        this.valorantAgenPerId = data as unknown as Datum;

      });
    }
    return '';
  }


  // setValuesToComponent(id:string | null){
  //   const result = dataFake.filter(article => article.id == id)[0]
  //   this.contentTitle = result.title
  //   this.contentDescription = result.description
  //  this.photoCover = result.photoCover }
}

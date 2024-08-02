import { Component } from '@angular/core';
import { MenuTittleComponent } from "../../components/menu-tittle/menu-tittle.component";
import { SectionHerosComponent } from "./section-heros/section-heros.component";

@Component({
  selector: 'app-maincontent',
  standalone: true,
  imports: [MenuTittleComponent, SectionHerosComponent],
  templateUrl: './maincontent.component.html',
  styleUrl: './maincontent.component.css'
})
export class MaincontentComponent {

}

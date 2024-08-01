import { Component } from '@angular/core';
import { MenuTittleComponent } from "../../components/menu-tittle/menu-tittle.component";
import { BigCardComponent } from "../../components/big-card/big-card.component";
import { SmallCardComponent } from "../../components/small-card/small-card.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MenuTittleComponent, BigCardComponent, SmallCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

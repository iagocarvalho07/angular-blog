import { Component, Input } from '@angular/core';
import { UUID } from 'node:crypto';

@Component({
  selector: 'app-small-card',
  standalone: true,
  imports: [],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css'
})
export class SmallCardComponent {
  @Input()
  photoCover: String = ""
  @Input()
  CardTittle:String= ""
  @Input()
  id: String= "";

}

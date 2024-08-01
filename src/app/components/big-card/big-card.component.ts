import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})
export class BigCardComponent {
  @Input()
  photoCover: String = ""
  @Input()
  CardTittle:String= ""
  @Input()
  CardDescription:String = ""
  @Input()
  id:String = ""
  constructor() { }

}

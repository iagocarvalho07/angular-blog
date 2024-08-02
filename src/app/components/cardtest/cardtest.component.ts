import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cardtest',
  standalone: true,
  imports: [],
  templateUrl: './cardtest.component.html',
  styleUrl: './cardtest.component.css'
})
export class CardtestComponent {
  @Input()
   img: String = "";
   @Input()
  description: String = "";
  @Input()
  name: String = "";
  @Input()
  id: String = "";

}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-habilities',
  standalone: true,
  imports: [],
  templateUrl: './habilities.component.html',
  styleUrl: './habilities.component.css',
})
export class HabilitiesComponent {
  @Input()
  abilityNumber: String = '';
  @Input()
  abilitiName: String = '';
  @Input()
  abilitIcon: String = '';
  @Input()
  abilitiDescription: String = '';
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SmallCardComponent } from "./components/small-card/small-card.component";
import { MenuTittleComponent } from "./components/menu-tittle/menu-tittle.component";
import { HomeComponent } from "./pages/home/home.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SmallCardComponent, MenuTittleComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-blog';
}

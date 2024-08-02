import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContentComponent } from './pages/content/content.component';
import { MaincontentComponent } from './pages/maincontent/maincontent.component';

export const routes: Routes = [

  {path: "",
    component:MaincontentComponent
  },
  {
    path:"home",
    component: HomeComponent
  },
  {
    path:"content/:id",
    component:ContentComponent
  }
];

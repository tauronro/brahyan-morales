import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BodyComponent } from './home/body/body.component';
import { ContacComponent } from './home/contac/contac.component';
import { InfoComponent } from './home/info/info.component';
import { StudiesComponent } from './home/studies/studies.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: BodyComponent,
      },
      {
        path: 'contacto',
        component: ContacComponent,
      },
      {
        path: 'informacion',
        component: InfoComponent,
      },
      {
        path: 'estudios',
        component: StudiesComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

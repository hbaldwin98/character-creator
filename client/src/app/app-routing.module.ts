import { BuilderComponent } from './builder/builder.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: AppComponent },
  {
    path: 'builder',
    component: BuilderComponent,
    loadChildren: () =>
      import('./builder/builder.module').then((mod) => mod.BuilderModule),
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { AbilityScoresComponent } from './ability-scores/ability-scores.component';
import { SelectRaceComponent } from './select-race/select-race.component';
import { SelectClassComponent } from './select-class/select-class.component';
import { BuilderHomeComponent } from './builder-home/builder-home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: BuilderHomeComponent },
  { path: 'race', component: SelectRaceComponent },
  { path: 'class', component: SelectClassComponent },
  { path: 'abilities', component: AbilityScoresComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuilderRoutingModule {}

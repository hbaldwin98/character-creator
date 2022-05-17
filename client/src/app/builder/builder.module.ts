import { BuilderRoutingModule } from './builder-routing.module';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { BuilderComponent } from './builder.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectRaceComponent } from './select-race/select-race.component';
import { RaceSelectModalComponent } from './race-select-modal/race-select-modal.component';
import { SelectClassComponent } from './select-class/select-class.component';
import { ClassSelectModalComponent } from './class-select-modal/class-select-modal.component';
import { BuilderHomeComponent } from './builder-home/builder-home.component';
import { AbilityScoresComponent } from './ability-scores/ability-scores.component';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { OrderModule } from 'ngx-order-pipe';

@NgModule({
  declarations: [
    SelectRaceComponent,
    BuilderComponent,
    RaceSelectModalComponent,
    SelectClassComponent,
    ClassSelectModalComponent,
    BuilderHomeComponent,
    AbilityScoresComponent,
  ],
  imports: [
    CommonModule,
    TabsModule.forRoot(),
    AccordionModule.forRoot(),
    ModalModule.forRoot(),
    FormsModule,
    OrderModule,
    BuilderRoutingModule,
  ],
  exports: [
    SelectRaceComponent,
    BuilderComponent,
    RaceSelectModalComponent,
    SelectClassComponent,
    ClassSelectModalComponent,
    BuilderHomeComponent,
    AbilityScoresComponent,
  ],
})
export class BuilderModule {}

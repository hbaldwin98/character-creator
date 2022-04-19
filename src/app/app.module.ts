import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SelectRaceComponent } from './character/select-race/select-race.component';
import { BuilderComponent } from './character/builder/builder.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { RaceSelectModalComponent } from './character/race-select-modal/race-select-modal.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SelectClassComponent } from './character/select-class/select-class.component';
import { ClassSelectModalComponent } from './character/class-select-modal/class-select-modal.component';
import { OrderModule } from 'ngx-order-pipe';
import { BuilderHomeComponent } from './character/builder-home/builder-home.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectRaceComponent,
    BuilderComponent,
    RaceSelectModalComponent,
    SelectClassComponent,
    ClassSelectModalComponent,
    BuilderHomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TabsModule.forRoot(),
    AccordionModule.forRoot(),
    ModalModule.forRoot(),
    FormsModule,
    OrderModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

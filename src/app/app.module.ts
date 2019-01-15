import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GarageComponent } from './garage/garage.component';
import { AccessoriesComponent } from './garage/accessories/accessories.component';
import { SelectedItemComponent } from './garage/selected-item/selected-item.component';
import { CarDirective } from './directive/car.directive';

import { ItemService } from './services/item.service';
import { EngineComponent } from './garage/child/engine/engine.component';
import { BreakComponent } from './garage/child/break/break.component';
import { ClutchComponent } from './garage/child/clutch/clutch.component';
import { HeadLightComponent } from './garage/child/head-light/head-light.component';

@NgModule({
  declarations: [
    AppComponent,
    GarageComponent,
    AccessoriesComponent,
    SelectedItemComponent,
    CarDirective,
    EngineComponent,
    BreakComponent,
    ClutchComponent,
    HeadLightComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ItemService],
  entryComponents: [
    EngineComponent,
    BreakComponent,
    ClutchComponent,
    HeadLightComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Injectable } from '@angular/core';

import { EngineComponent } from '../garage/child/engine/engine.component';
import { BreakComponent } from '../garage/child/break/break.component';
import { ClutchComponent } from '../garage/child/clutch/clutch.component';
import { HeadLightComponent } from '../garage/child/head-light/head-light.component';
import { AddItem } from '../class/add-item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  getItems() {
    return [
      new AddItem(EngineComponent, {}),
      new AddItem(BreakComponent, {}),
      new AddItem(ClutchComponent, {}),
      new AddItem(HeadLightComponent, {})
    ];
  }

  loadComponentSelected(index) {
    const items = this.getItems()[index];
  }
}

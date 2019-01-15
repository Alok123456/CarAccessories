import { Component, Input, OnInit, ViewChild, ComponentFactoryResolver } from '@angular/core';

import { CarDirective } from '../../directive/car.directive';
import { AddItem } from '../../class/add-item';
import { AddItemComponent } from '../../interface/add-item-component';
import { EngineComponent } from '../child/engine/engine.component';


@Component({
  selector: 'app-selected-item',
  templateUrl: './selected-item.component.html',
  styleUrls: ['./selected-item.component.css']
})
export class SelectedItemComponent implements OnInit {
  @Input() items: AddItem[];
  currentAdIndex = -1;
  @ViewChild(CarDirective) appCarHost: CarDirective;
  @ViewChild(EngineComponent)
  private engineComponent: EngineComponent;
  interval: any;

  constructor(private companyFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
  }

  loadComponent(index) {
  //  this.currentAdIndex = (this.currentAdIndex + 1) % this.items.length;
    const adItem = this.items[index];
    const componentFactory = this.companyFactoryResolver.resolveComponentFactory(adItem.component);
    const viewContainerRef = this.appCarHost.viewContainerRef;
    // viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent(componentFactory);
    (<AddItemComponent>componentRef.instance).data = adItem.data;
  }

  onSave() {
    console.log('engineComponent', this.engineComponent.manufacturers);
  }

}

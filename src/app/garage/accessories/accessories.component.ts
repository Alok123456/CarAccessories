import { Component, OnInit, ViewChild } from '@angular/core';
import { SelectedItemComponent } from '../selected-item/selected-item.component';

import { ItemService } from '../../services/item.service';
import { AddItem } from '../../class/add-item';

@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.component.html',
  styleUrls: ['./accessories.component.css']
})
export class AccessoriesComponent implements OnInit {
  @ViewChild(SelectedItemComponent)
  private itemComponent: SelectedItemComponent;

  value: String = '';
  items: AddItem[];
  arr = [];
  disable: boolean;

  public accessories: any = [
    { id: '0', accessory: 'Engine', min: '1', max: '1' },
    { id: '1', accessory: 'Break', min: '2', max: '4' },
    { id: '2', accessory: 'Clutch', min: '0', max: '1' },
    { id: '3', accessory: 'Head Light', min: '1', max: '2' }
  ];

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.items = this.itemService.getItems();
  }

  onChange() {
    this.disable = false;
  }

  addItem(itemId) {
    this.arr.push(this.accessories[itemId]);
    const count = this.arr.filter((obj) => obj.id === itemId).length;
    if (count >= this.accessories[itemId].min && count <= this.accessories[itemId].max) {
      this.itemComponent.loadComponent(itemId);
    } else if (count <= this.accessories[itemId].min) {
      this.itemComponent.loadComponent(itemId);
    } else {
      alert(`Maximum Limit for adding ${this.accessories[itemId].accessory} is ${this.accessories[itemId].max}`);
    }
  }

  // ngAfterViewInit() {
  //   this.initalLoading();
  // }

  // initalLoading() {
  //   this.accessories.forEach(element => {
  //     for (let i = 0; i < +element.min; i++) {
  //       this.itemComponent.loadComponent(element.id);
  //       this.arr.push(this.accessories[element.id]);
  //     }
  //   });
  // }
}

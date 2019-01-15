import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-engine',
  templateUrl: './engine.component.html',
  styleUrls: ['./engine.component.css']
})
export class EngineComponent implements OnInit {
  public manufacturers: any = ['Toyota', 'Fiat', 'Honda'];
  public details = {
      power: '',
      bhp: '',
      selectedVal: ''
  };
  constructor() { }

  ngOnInit() {
  }

}

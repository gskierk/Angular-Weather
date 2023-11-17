import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-testing-component',
  templateUrl: './testing-component.component.html',
  styleUrls: ['./testing-component.component.sass']
})
export class TestingComponentComponent {

  @Input() title: string = '';
  public temp: number = 20;
  public speed: number = 0;

  public constructor () {}

  public onButtonClick() {
    console.log('clicked');
  }
}


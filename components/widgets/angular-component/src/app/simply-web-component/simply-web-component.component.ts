import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-simply-web-component',
  templateUrl: './simply-web-component.component.html',
  styleUrls: ['./simply-web-component.component.scss'],
  encapsulation: ViewEncapsulation.Native
})
export class SimplyWebComponentComponent implements OnInit {

  @Input() country: string;
  public countryConfig: any;

  constructor() {
    this.countryConfig = {
      'USA': 'blue',
      'Canada': 'red',
      'Brazil': 'yellow'
    };
  }

  ngOnInit() {
    console.log(this.country)
  }

}

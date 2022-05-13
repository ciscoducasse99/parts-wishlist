import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-car-info',
  templateUrl: './car-info.component.html',
  styleUrls: ['./car-info.component.scss']
})
export class CarInfoComponent implements OnInit {
  @Input() car:any;

  constructor() { }

  ngOnInit(): void {
  }

}

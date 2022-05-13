import { Component, OnInit } from '@angular/core';
import { CarsapiService } from 'src/app/services/carsapi.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {

  data = null

  constructor(private carapiservice: CarsapiService) { }

  ngOnInit(): void {
    this.getCars()
  }

  getCars(): void{
    this.carapiservice.getCardata().subscribe((data)=> {
      this.data = data.results
      console.log(data.results)
  })
  }

}

import { Component, OnInit } from '@angular/core';
import {Car} from '../shared/car';
import {Cars} from '../shared/cars';
import {CarService} from '../services/car.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  cars: Car[];
  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.cars = this.carService.getCars();
  }

}

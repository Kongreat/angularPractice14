import { Injectable } from '@angular/core';
import {Cars} from '../shared/cars';
import {Car} from '../shared/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private cars: Car[] = Cars;
  constructor() { }

  getCars(): Car[]{
    return this.cars;
  }

  getCarById(id: number): Car{
    return this.cars.find(x => x.id === id);
  }

}



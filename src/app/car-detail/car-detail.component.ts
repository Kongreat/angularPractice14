import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {CarService} from '../services/car.service';
import {Car} from '../shared/car';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {
  color: string;
  year: number;
  name: string;
  car: Car;
  carId: number;
  constructor(private route: ActivatedRoute, private carService: CarService, private router: Router ) { }

  ngOnInit(): void {
    // const id = this.route.snapshot.params.id;
    // this.car = this.carService.getCarById(Number(id));
    this.route.paramMap.subscribe((params: ParamMap) => {
      const newId = parseInt(params.get('id'));
      this.carId = newId;
      this.car = this.carService.getCarById(Number(this.carId));
      });
  }

  edit(): void {
    this.car.color = this.color;
    this.car.name = this.name;
    this.car.year = this.year;
  }

  goPrevious(): void{
    const prevId = this.carId - 1;
    this.router.navigate(['/carDetail', prevId]);
  }

  goNext(): void{
    const nextId = this.carId + 1;
    this.router.navigate(['/carDetail', nextId]);
  }

}

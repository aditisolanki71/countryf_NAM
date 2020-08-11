import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { CountryService} from '../../shared/country.service';
import {Country} from '../../country';

@Component({
  selector: 'app-create-update',
  templateUrl: './create-update.component.html',
  styleUrls: ['./create-update.component.css']
})
export class CreateUpdateComponent implements OnInit {

  public country:Country;
  constructor(private countryService:CountryService,private router:Router) { }

  ngOnInit(): void {
    this.country = this.countryService.getter();
  }

  createOrUpdate() {
    this.countryService.createCountry(this.country).subscribe(
      data => {
        console.log('create data',data);
        this.router.navigate(['/']);
      },
      error => {
        console.log('err',error);
      }
      )
  }

}

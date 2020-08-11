import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../shared/country.service'
import { Country } from '../../country';
import { Router} from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public countries:Country[];
  constructor(private router:Router,private countryService:CountryService) { }

  ngOnInit(): void {
    this.readCountries();
  } 

  readCountries() {
    this.countryService.readCountries().subscribe(
      data => {
        console.log('data',data)
        this.countries = data['msg'];
      },
      error => {
        console.log('err',error)
      }
    )
  }

  doUpdate(country) {
    this.countryService.setter(country);
    this.router.navigate(['/createUpdate']);
  }
  doDelete(country) {
    this.countryService.deleteCountry(country._id).subscribe(
      data => {
        this.countries.splice(this.countries.indexOf(country),1)
      },
      error => {
        console.log('err',error);
      }
    )
  }
}

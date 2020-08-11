import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../shared/country.service'
import { Country } from '../../country';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public countries:Country[];
  constructor(private _countryService:CountryService) { }

  ngOnInit(): void {
    this.readCountries();
  } 

  readCountries() {
    this._countryService.readCountries().subscribe(
      data => {
        console.log('data',data)
        this.countries = data['msg'];
      },
      error => {
        console.log('err',error)
      }
    )
  }
}

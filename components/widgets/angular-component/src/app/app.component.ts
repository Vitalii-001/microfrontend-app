import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  countryForm: FormGroup;
  countries = ['USA', 'Canada', 'Brazil'];
  selectedCountry: string;
  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.countryForm = this.fb.group({
      countryControl: ['Canada']
    });
    this.selectedCountry = this.countryForm.value.countryControl;

  }

  changeSelect(e) {
    this.selectedCountry = this.countryForm.value.countryControl;
  }

}

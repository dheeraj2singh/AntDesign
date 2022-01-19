import { FormBuilder, FormGroup } from '@angular/forms';
import { Formconstants } from './../../form-constants/form-constant';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.css']
})
export class AddressFormComponent implements OnInit {
  formconstant = Formconstants;
  @Input() address: FormGroup;
  constructor(private fb: FormBuilder) {
    this.address = this.fb.group({});
  }

  ngOnInit(): void {
  }

}

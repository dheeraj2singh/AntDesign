import { FormModel } from './Interface/form-model.model';
import { FormBuilder } from '@angular/forms';
import { FormGroup, Validators } from '@angular/forms'
import { Formconstants } from './form-constants/form-constant';
import { Component, OnInit } from '@angular/core';
import { FormService } from './service/form.service';

export enum form_enum {
  details_form,
  address_form,
  feedback_form
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public formconstant = Formconstants;
  public agree_term_disabled:boolean =Formconstants.boolean_true;
  public index: number = Formconstants.Form_Index;
  public dataList: FormModel[];
  public myform: FormGroup;
  public error:string;
  public get formindex(): typeof form_enum {
    return form_enum;
  }
  constructor(private fb: FormBuilder, private service: FormService) {
    this.dataList = [];
    this.error="";
    this.myform = this.fb.group({
      agree_terms: ['false'],
      name: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.email]],
      phone: ['', [Validators.minLength(10), Validators.maxLength(10)]],
      gender: [''],
      house_no: [''],
      street: [''],
      city: [''],
      country: [''],
      feedback: [''],
      rate: [''],
    });

  }
  ngOnInit(): void {
    this.getdata();
  }
  // for geting the data from server
  getdata() {
    this.service.getdata().subscribe(res => this.dataList = res, error => { this.error = error.message });
  }

  GetChildData(event: boolean) {
    this.agree_term_disabled = !event;
  }

  // steps change
  pre() {
    this.index -= this.formconstant.POS_ONE;
    this.myform.controls['house_no'].clearValidators();
  }

  next() {
    this.index += this.formconstant.POS_ONE;
    this.setValidation();
  }

  done() {
    console.log("done");
  }

  setValidation() {
    if (this.myform.controls.name.valueChanges.subscribe(res => { return res; }) && this.myform.controls.email.value.length > 0) {
      this.myform.controls['house_no'].setValidators([Validators.required]);
    }
  }

  onIndexChange(event: number) {
    this.index = event;
  }

  // form submit
  onsubmit() {
    // getting the data from form
    let data: FormModel = this.myform.value;
    // callin add data api on duumy json server
    this.service.addData(data).subscribe(res => { this.getdata() }, error => this.error = error)
    this.myform.reset();
    this.index = Formconstants.Form_Index;
  }

  // to remove the data from server
  remove(id: number) {
    this.service.removedata(id).subscribe(res => { this.getdata() });
  }


}

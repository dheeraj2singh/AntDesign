import { FormGroup,FormBuilder } from '@angular/forms';
import { Formconstants } from './../../form-constants/form-constant';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.css']
})
export class FeedbackFormComponent implements OnInit {
  public value: number = Formconstants.value;
  formconstant = Formconstants;
  @Input() public data_disable: boolean = false;
  @Input() public feedback: FormGroup;
  constructor(private fb: FormBuilder) {
    this.feedback = this.fb.group({});
  }

  ngOnInit(): void {

    if (this.data_disable) {
      this.feedback.controls.feedback.disable();
    } else {
      this.feedback.controls.feedback.enable();
    }
  }


}

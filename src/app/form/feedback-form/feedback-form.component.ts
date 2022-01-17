import { Formconstants } from './../../form-constants/form-constant';



import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.css']
})
export class FeedbackFormComponent implements OnInit {
  
 
  value :number= Formconstants.value;
  @Input() data_disable!:boolean;
  @Input() feedback:any;
  constructor() { }

  ngOnInit(): void {
  console.log(this.data_disable)
  if(this.data_disable){
    this.feedback.get('feedback').disable();
  }else{
    this.feedback.get('feedback').enable();
  }
  }
  
  
}

import { FormModel } from './model/form-model.model';
import { Form, FormBuilder } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Formconstants } from './form-constants/form-constant';
import { Component, Input, OnInit } from '@angular/core';

export enum form_enum{
  details_form,
  address_form,
  feedback_form
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {

 agree_term_disabled=true;
  title = 'AntDesign';
 index:number=Formconstants.Form_Index;
 myform:any;
 dataList:FormModel[]=[];

data!:FormModel;

public get formindex(): typeof form_enum{
  return form_enum;
}
constructor(private fb:FormBuilder){}
ngOnInit(): void {
  this.createForm()
  
 

}


GetChildData(event:boolean){
  
  this.agree_term_disabled=!event;
  console.log("child",this.agree_term_disabled)
  
}

  pre(){
    this.index-=1;
    
  }
  next(){
    this.index+=1;


  }
  done(){
    console.log("done");
  }
 
  onIndexChange(event:any){
    this.index=event;
  }
    createForm(){
      this.myform=this.fb.group({
        agree_terms:['false'],
        name:[''],
        email:[''],
        phone:[''],
        gender:[''],
        
          house_no:[''],
          street:[''],
          city:[''],
          country:[''],
        
        
          feedback:[''],
          rate:[''],
               
      });
    }

    onsubmit(){
      this.data=this.myform.value;
      this.dataList.push(this.myform.value);
      console.log(this.dataList)
      this.index=Formconstants.Form_Index;
      this.createForm();
    }
    

}
